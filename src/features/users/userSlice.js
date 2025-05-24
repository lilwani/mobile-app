import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userDetails: {},
    errorUser: false,
    isLoading: false,
}

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        login: (state, action) => {},
        signup: (state, action) => {},
        getAllUsers: (state, action) => {},
        getUser: (state, action) => {},
    },
})

export const { login, signup, getAllUsers, getUser } = userSlice.actions

export default userSlice.reducer


