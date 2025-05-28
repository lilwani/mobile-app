import React from 'react'
import { fetchAllProducts } from '../../services/productAPIService'
import store from '../../store'
import { getAllProducts } from './productsSlice'
import { useSelector } from 'react-redux'
import Item from './Item'

export default function Menu() {
    const allProducts = useSelector((state) => state.products.products)
    return (
        <ul className="flex flex-wrap flex-row px-50">
            {allProducts.map((product) => (
                <Item product={product} key={product.id} />
            ))}
        </ul>
    )
}

export async function loader(request, params) {
    const { data: payload } = await fetchAllProducts()
    store.dispatch(getAllProducts(payload))
}
