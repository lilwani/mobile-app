import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import productReducer from './features/products/productsSlice';

export const rootReducer = combineReducers({
    users: userReducer,
    products: productReducer,
});

export const setupStore = (preloadedState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
};

export default setupStore();
