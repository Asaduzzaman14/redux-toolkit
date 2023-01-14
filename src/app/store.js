import { configureStore } from '@reduxjs/toolkit'
import CartSlice from '../features/Cart/CartSlice';
import FilterSlice from '../features/Filter/filterSlice';


const store = configureStore({
    devTools: false,
    reducer: {
        cart: CartSlice,
        filter: FilterSlice,
    }
})



export default store;
