import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userDetails: {},
    isError: false,
    errorMessage: '',
    isLoading: false,
};

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.userDetails = { ...action.payload };
        },
        signup: (state, action) => {},
        setAccessToken: (state, action) => {
            state.userDetails.token = action.payload.token;
        },
        setUserError: (state, action) => {
            state.errorUser = action.payload.isError;
            state.errorMessage = action.payload.errorMessage;
        },
    },
});

export const { login, signup, setAccessToken, setUserError } =
    userSlice.actions;

export const getUserToken = (state) => state.users.userDetails;

export default userSlice.reducer;
