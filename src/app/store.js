import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import cartSlice from '../features/Cart/cartSlice';
import filterSlice from '../features/filter/filterSlice';
import productSlice from '../features/product/productSlice';


const store = configureStore({
    // devTools: false,  
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
        products: productSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})


export default store;
