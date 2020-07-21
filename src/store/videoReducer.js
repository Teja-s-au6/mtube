import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';

export const fetchAllVideos = createAsyncThunk('videos/fetchAllVideos', async (pageId = '', { getState }) => {
	try {
		const response = await axios.get(
			`${config.BASE_URL}/videos?part=snippet&key=${config.API_KEY}&regionCode=US&chart=mostPopular&maxResults=15&pageToken=${pageId}`
        );
        // console.log(response.data)
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

export const fetchTrendingVideos = createAsyncThunk('videos/fetchTrendingVideos', async (pageId = '', { getState }) => {
	try {
		const response = await axios.get(
			`${config.BASE_URL}/videos?part=snippet&key=${config.API_KEY}&regionCode=IN&chart=mostPopular&maxResults=15&pageToken=${pageId}`
        );
        // console.log(response.data)
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

export const fetchSearchVideos = createAsyncThunk('videos/fetchSearchVideos', async ({searchQuery,pageId = ''}) => {
	try {
		const response = await axios.get(
			`${config.BASE_URL}/search?part=snippet&key=${config.API_KEY}&type=video&maxResults=15&pageToken=${pageId}&q=${searchQuery}`
        );
        //console.log(`${config.BASE_URL}/search?part=snippet&key=${config.API_KEY}&maxResults=15&pageToken=${pageId}&q=${searchQuery}`)
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

const slice = createSlice({
	name: 'videoReducer',
	initialState: { videos: null, isVideosFetching: false },
	reducers: {
		nullify: (state, action) => {
			state.videos = null
		}
	},
	extraReducers: {
		[fetchAllVideos.pending]: (state, action) => {
			state.isVideosFetching = true;
		},
		[fetchAllVideos.fulfilled]: (state, action) => {
			state.videos = action.payload;
			state.isVideosFetching = false;
		},
		[fetchAllVideos.rejected]: (state, action) => {
			state.isVideosFetching = false;
		},
		[fetchTrendingVideos.pending]: (state, action) => {
			state.isVideosFetching = true;
		},
		[fetchTrendingVideos.fulfilled]: (state, action) => {
			state.videos = action.payload;
			state.isVideosFetching = false;
		},
		[fetchTrendingVideos.rejected]: (state, action) => {
			state.isVideosFetching = false;
		},
		[fetchSearchVideos.pending]: (state, action) => {
			state.isVideosFetching = true;
		},
		[fetchSearchVideos.fulfilled]: (state, action) => {
			state.videos = action.payload;
			state.isVideosFetching = false;
		},
		[fetchSearchVideos.rejected]: (state, action) => {
			state.isVideosFetching = false;
		}
	}
});

export const { nullify } = slice.actions;

export default slice.reducer;
