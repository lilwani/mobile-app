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
            state.userDetails = { ...action.payload.data };
        },
        signup: (state, action) => {},
        getAllUsers: (state, action) => {},
        getUser: (state, action) => {},
        setUserError: (state, action) => {
            state.errorUser = action.payload.isError;
            state.errorMessage = action.payload.errorMessage;
        },
    },
});

export const { login, signup, getAllUsers, getUser, setUserError } =
    userSlice.actions;

export default userSlice.reducer;

