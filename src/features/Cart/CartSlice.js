import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            const selectedProduct = state.cart.find((product) => product._id === action.payload._id)

            if (!selectedProduct) {
                const product = { ...action.payload, quantity: 1 }
                state.cart.push(product)
            }
            else {
                selectedProduct.quantity += 1

                state.cart.filter(product => product._id !== selectedProduct._id).push(selectedProduct)

                // state.cart.push(action.payload)
            }
        }
    }
})

export const { addTocart } = cartSlice.actions
export default cartSlice.reducer;