import { Component, StateConfig } from 'ng-forward';
import HomeComponent from './home-component';

@Component({
    selector: 'app',
    template: `
        <div id="main" class="container">
            <div ui-view></div>
        </div>
    `
})
@StateConfig([
    {url: '/', name: 'home', component: HomeComponent}
])
export default class {
}
