import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/Cart/cartSlice';
import filterSlice from '../features/filter/filterSlice';


const store = configureStore({
    // devTools: false,
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
    }
})


export default store;
