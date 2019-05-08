import { combineReducers } from 'redux';
import menuReducer from './menu_reducer';
import songSelectionReducer from './song_selection_reducer';
import audioPlayerReducer from './audio_player_reducer';

export default combineReducers({
    menu: menuReducer,
    song: songSelectionReducer,
    player: audioPlayerReducer
});