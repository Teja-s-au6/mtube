import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import userReducer from './userReducer';
import currentVideoReducer from './currentVideoReducer';
import playlistReducer from './playlistReducer';

export default combineReducers({
    videos: videoReducer,
    users : userReducer,
    currentVideos: currentVideoReducer,
    playlists: playlistReducer
})