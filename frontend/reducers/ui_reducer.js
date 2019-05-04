import { combineReducers } from 'redux';
import menuReducer from './menu_reducer';

export default combineReducers({
    menu: menuReducer
});