import { OPEN_MENU, CLOSE_MENU } from '../actions/menu_actions';

export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MENU:
            return [action.menu, action.id];
        case CLOSE_MENU:
            return null;
        default:
            return state;
    }
};