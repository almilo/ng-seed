import { CHANGE_MESSAGE } from './home-actions';

export default (state = 'sweet home!', action) => {
    switch (action.type) {
        case CHANGE_MESSAGE:
            return action.payload.message || null;
            break;
        default:
            return state;
    }
}
