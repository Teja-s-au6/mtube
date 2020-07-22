import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import userReducer from './userReducer';
import currentVideoReducer from './currentVideoReducer';
import playlistReducer from './playlistReducer';
import subscriptionReducer from './subscriptionReducer';
import channelReducer from './channelReducer'

export default combineReducers({
    videos: videoReducer,
    users : userReducer,
    currentVideos: currentVideoReducer,
    playlists: playlistReducer,
    subscriptions : subscriptionReducer,
    channel : channelReducer
})