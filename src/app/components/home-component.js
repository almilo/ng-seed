import { Component, Inject } from 'ng-forward';
import { changeMessage } from '../state/home-actions';

@Component({
    selector: 'home',
    template: `
        <div class="jumbotron">
            <h1>Home, {{ctrl.message}}</h1>
            <form class="form-inline">
                <input ng-model="ctrl.newMessage" class="form-control">
                <button (click)="ctrl.changeMessage(ctrl.newMessage)" class="btn btn-primary">change message</button>
            </form>
        </div>
    `
})
@Inject('$ngRedux', '$scope')
export default class {
    constructor($ngRedux, $scope) {
        const actions = {changeMessage},
            unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);

        $scope.$on('$destroy', unsubscribe);
    }

    mapStateToThis(state) {
        return {
            message: state.home
        };
    }
}
