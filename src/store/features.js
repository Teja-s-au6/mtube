import { combineReducers } from 'redux';
import videoReducer from './videoReducer';
import userReducer from './userReducer';


export default combineReducers({
    videos: videoReducer,
    users : userReducer
})