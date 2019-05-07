import { combineReducers } from 'redux';
import menuReducer from './menu_reducer';
import songSelectionReducer from './song_selection_reducer';

export default combineReducers({
    menu: menuReducer,
    song: songSelectionReducer
});