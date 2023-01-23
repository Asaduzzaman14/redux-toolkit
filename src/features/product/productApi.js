import axios from '../../utils/axios.config'


export const fetchProduct = async () => {
    // METHOD 1

    // const res = await fetch('http://localhost:5000/products')
    // const data = await res.json()
    // return data.data

    const data = await axios.get('/products')
    return data.data.data
}
