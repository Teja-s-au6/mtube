import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';


export const fetchSubscription = createAsyncThunk('profile/fetchSubscription', async (_, { getState }) => {
	const accessToken = getState().features.users.user.access_token;
	//console.log(accessToken)
	try {
		const response = await axios.get(
			`${config.BASE_URL}/subscriptions?part=snippet,contentDetails&mine=true&maxResults=50&key=${config.API_KEY}`,
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


const slice = createSlice({
	name: 'subscriptions',
	initialState: { subscriptions: null, isFetchingSubscriptions: false },
	reducers: {},
	extraReducers: {
		[fetchSubscription.pending]: (state, action) => {
			state.isFetchingSubscriptions = true;
		},
		[fetchSubscription.fulfilled]: (state, action) => {
			state.subscriptions = action.payload;
			state.isFetchingSubscriptions = false;
		},
		[fetchSubscription.rejected]: (state, action) => {
			state.isFetchingSubscriptions = false;
		}
	}
});

export default slice.reducer;