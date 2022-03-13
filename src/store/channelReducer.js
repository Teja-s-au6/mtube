import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';


export const fetchChannel = createAsyncThunk('profile/fetchChannel', async (_, { getState }) => {
	const accessToken = getState().features.users.user.access_token;
	//console.log(accessToken)
	try {
		const response = await axios.get(
			`${config.BASE_URL}/channels?part=snippet,contentDetails,statistics&mine=true&maxResults=50&key=${config.API_KEY}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
					Accept: 'application/json'
				}
			}
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
});


const slice = createSlice({
	name: 'channel',
	initialState: { channel: null, isFetchingchannel: false },
	reducers: {},
	extraReducers: {
		[fetchChannel.pending]: (state, action) => {
			state.isFetchingchannel = true;
		},
		[fetchChannel.fulfilled]: (state, action) => {
			state.channel = action.payload;
			state.isFetchingchannel = false;
		},
		[fetchChannel.rejected]: (state, action) => {
			state.isFetchingchannel = false;
		}
	}
});

export default slice.reducer;