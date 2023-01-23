import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProduct } from './productApi'

const InitialProduct = {
    products: [],
    isLoading: false,
    isError: false,
    error: ''
}
export const getProducts = createAsyncThunk('products/getProducts', async () => {

    // const res = await fetch('http://localhost:5000/products')
    // const data = await res.json()
    // return data.data

    const products = fetchProduct()
    console.log(products);
    return products

})

const productSlice = createSlice({
    name: 'products',
    initialState: InitialProduct,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        }).addCase(getProducts.rejected, (state, action) => {
            state.product = [];
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer;

