import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import productReducer from './features/products/productsSlice';

const rootReducer = combineReducers({
  users: userReducer,
  products: productReducer,
});

const setupStore = (preloadedState = {}) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export default setupStore;
