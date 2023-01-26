import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProduct, postProduct } from './productApi'

const InitialProduct = {
    products: [],
    isLoading: false,
    postSuccess: false,
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

export const addProducts = createAsyncThunk('products/addProducts', async (data) => {
    const product = postProduct(data)
    return product
})

const productSlice = createSlice({
    name: 'products',
    initialState: InitialProduct,
    reducers: {
        togglePostSuccess: (state) => {
            state.postSuccess = false
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            }).addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
            }).addCase(getProducts.rejected, (state, action) => {
                state.products = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(addProducts.pending, (state) => {
                state.isLoading = true;
                state.postSuccess = false;
                state.isError = false;
            }).addCase(addProducts.fulfilled, (state) => {
                state.postSuccess = true;
                state.isLoading = false;
            }).addCase(addProducts.rejected, (state, action) => {
                state.products = [];
                state.isLoading = false;
                state.postSuccess = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
})

export const { togglePostSuccess } = productSlice.actions

export default productSlice.reducer;

