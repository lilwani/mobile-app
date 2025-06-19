import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    isError: false,
    errorMessage: '',
    isLoading: false,
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            console.log(`payload is ${JSON.stringify(action.payload)}`);
            state.products = [...action.payload];
        },
        setProductError: (state, action) => {
            state.errorUser = action.payload.isError;
            state.errorMessage = action.payload.errorMessage;
        },
    },
});

export const { setProducts, setProductError } = productsSlice.actions;

export default productsSlice.reducer;
