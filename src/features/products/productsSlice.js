import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    errorProducts: false,
    isLoading: false,
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        getAllProducts: (state, action) => {
            state.products = [...action.payload]
        },
    },
})

export const { getAllProducts } = productsSlice.actions

export default productsSlice.reducer
