import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';

export const fetchPlaylists = createAsyncThunk('videos/fetchPlaylists', async (pageId = '', { getState }) => {
	const accessToken = getState().features.users.user.access_token;
	//console.log(accessToken)
	try {
		const response = await axios.get(
			`${config.BASE_URL}/playlists?part=snippet&mine=true&maxResults=20&pageToken=${pageId}&key=${config.API_KEY}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
					Accept: 'application/json'
				}
			}
		);
		//console.log(`${config.BASE_URL}/playlists?part=snippet&key=${config.API_KEY}&mine=true&maxResults=20&pageToken=${pageId}`)
		return response.data;
	} catch (error) {
		console.error(error);
	}
});

export const createPlaylist = createAsyncThunk('videos/createPlaylists', async (playlist, { getState }) => {
	const accessToken = getState().features.users.user.access_token;
	//console.log(accessToken)
	//console.log(`${config.BASE_URL}/playlists?part=snippet,status&key=${config.API_KEY}`,playlist)
	try {
		const { data } = await axios.post(
			`${config.BASE_URL}/playlists?part=snippet,status&key=${config.API_KEY}`,
			playlist,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
					Accept: 'application/json'
				}
			}
		);
		//console.log(`${config.BASE_URL}/playlists?part=snippet,status&key=${config.API_KEY}`,playlist)
		const playlistObj = getState().features.playlists.playlists;
		//console.log(playlistObj.items, data)
		const create = Object.assign({...playlistObj.items}, data)
		// console.log(createdPlaylist)
		 //playlistObj.items.push(data)
		 return create
	} catch (error) {
		console.error(error);
	}
});



const slice = createSlice({
	name: 'playlists',
	initialState: { playlists: null, isFetchingPlaylists: false },
	reducers: {},
	extraReducers: {
		[fetchPlaylists.pending]: (state, action) => {
			state.isFetchingPlaylists = true;
		},
		[fetchPlaylists.fulfilled]: (state, action) => {
			state.playlists = action.payload;
			state.isFetchingPlaylists = false;
		},
		[fetchPlaylists.rejected]: (state, action) => {
			state.isFetchingPlaylists = false;
		},
		[createPlaylist.pending]: (state, action) => {
			state.isFetchingPlaylists = true;
		},
		[createPlaylist.fulfilled]: (state, action) => {
			state.playlists = action.payload;
			state.isFetchingPlaylists = false;
		},
		[createPlaylist.rejected]: (state, action) => {
			state.isFetchingPlaylists = false;
		}
	}
});

export default slice.reducer;
