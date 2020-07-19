import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';

export const fetchCurrentVideos = createAsyncThunk('videos/fetchCurrentVideos', async (videoId, { getState }) => {
	try {
		const response = await axios.get(
			`${config.BASE_URL}/videos?part=snippet,contentDetails,statistics&key=${config.API_KEY}&id=${videoId}`
        );
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

export const fetchCurrentVideoComment = createAsyncThunk(
	'videos/fetchCurrentVideoComment',
	async (videoId, { getState }) => {
		try {
			const response = await axios.get(
				`${config.BASE_URL}/commentThreads?part=snippet,replies&key=${config.API_KEY}&videoId=${videoId}`
			);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
);

const slice = createSlice({
	name: 'currentVideoReducer',
	initialState: { video: null, isFetchingCurrentVideo: false, comments: null },
	reducers: {},
	extraReducers: {
		[fetchCurrentVideos.pending]: (state, action) => {
			state.isFetchingCurrentVideo = true;
		},
		[fetchCurrentVideos.fulfilled]: (state, action) => {
			state.video = action.payload;
			state.isFetchingCurrentVideo = false;
		},
		[fetchCurrentVideos.rejected]: (state, action) => {
			state.isFetchingCurrentVideo = false;
		},
		[fetchCurrentVideoComment.pending]: (state, action) => {
			state.isFetchingCurrentVideo = true;
		},
		[fetchCurrentVideoComment.fulfilled]: (state, action) => {
			state.comments = action.payload;
			state.isFetchingCurrentVideo = false;
		},
		[fetchCurrentVideoComment.rejected]: (state, action) => {
			state.isFetchingCurrentVideo = false;
		}
	}
});

export default slice.reducer;
