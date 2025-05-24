import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    errorProducts: false,
    isLoading: false,
}

const productsSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        getAllProducts: (state, action) => {},
    },
})

export const { getAllProducts } = productsSlice.actions

export default productsSlice.reducer
