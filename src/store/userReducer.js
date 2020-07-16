import { createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name:"userReducer",
    initialState:{ 
        user: JSON.parse(localStorage.getItem('user')) || null,
        isAuthenticating: false
    },
    reducers:{
        setUser : (state, action) => {
            const userJSON = JSON.stringify(action.payload);
            localStorage.setItem('user', userJSON);
            state.user = action.payload
        },
        AuthenticateUser : (state, action) => {
            state.isAuthenticating = !state.isAuthenticating
        },
        logOutUser: (state, action) => {
            localStorage.removeItem('user')
            state.user = null
        }

    }
})

export const { setUser, AuthenticateUser, logOutUser } = slice.actions;

export default slice.reducer;