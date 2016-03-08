import { combineReducers } from 'redux';
import { router } from 'redux-ui-router';
import home from './home-reducer';

export default combineReducers({
    router,
    home
});
