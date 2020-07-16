import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';

export const fetchAllVideos = createAsyncThunk(
    'videos/fetchAllVideos',
    async (_, {getState}) => {
        try {
            const response = await axios.get(`${config.BASE_URL}/videos?part=snippet&key=${config.API_KEY}&regionCode=IN&chart=mostPopular&maxResults=15&${getState().features.videos.videos ? 'pageToken' + getState().features.videos.videos.nextPageToken : "" }`);
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
)

const slice = createSlice({
    name:"videoReducer",
    initialState:{ videos: null, isVideosFetching: false },
    reducers:{},
    extraReducers:{
        [fetchAllVideos.pending] : (state, action) => {
            state.isVideosFetching = true
        },
        [fetchAllVideos.fulfilled] : (state, action) => {
            state.videos = action.payload
            state.isVideosFetching = false
        },
        [fetchAllVideos.rejected] : (state, action) => {
            state.isVideosFetching = false
        }
    }

})


export default slice.reducer;