import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
    brands: [],
    keyword: ''
}

const filterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    }
})

export default filterSlice.reducer;