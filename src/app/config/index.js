import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngReduxRouter from 'redux-ui-router';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../state/index';

export default angular.module('ng-seed.config',
    [
        angularUiRouter,
        ngRedux,
        ngReduxRouter
    ])
    .config(($locationProvider, $urlRouterProvider) => {
        $locationProvider.html5Mode({enabled: false});

        $urlRouterProvider.otherwise('/');
    })
    .config($ngReduxProvider => {
        const logger = createLogger();

        $ngReduxProvider.createStoreWith(rootReducer, ['ngUiRouterMiddleware', thunk, logger]);
    });
