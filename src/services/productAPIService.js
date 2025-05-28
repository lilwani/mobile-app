import axios from 'axios'

export async function fetchAllProducts() {
    const url = 'http://localhost:3000/products'
    const res = await axios.get(url)
    return res
}
