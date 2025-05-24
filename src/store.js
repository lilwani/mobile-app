import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/users/userSlice'
import productReducer from './features/products/productsSlice'

const store = configureStore({
    reducer: {
        users: userReducer,
        products: productReducer,
    },
})

export default store
