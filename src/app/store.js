import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import cartSlice from '../features/Cart/cartSlice';
import filterSlice from '../features/filter/filterSlice';


const store = configureStore({
    // devTools: false,
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export default store;
