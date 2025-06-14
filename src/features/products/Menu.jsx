import React from 'react';
import { fetchAllProducts } from '../../services/productAPIService';
import store from '../../store';
import { getAllProducts } from './productsSlice';
import { useSelector } from 'react-redux';
import Item from './Item';

export default function Menu() {
    const allProducts = useSelector((state) => state.products.products);
    return (
        <ul className="flex flex-wrap flex-row px-50">
            {allProducts.map((product) => (
                <Item product={product} key={product.id} />
            ))}
        </ul>
    );
}

export async function loader({ request, params }) {
    try {
        console.log(`Inside Menu loader`);
        const url = new URL(request.url);
        const urlQuery = url.searchParams.getAll('isAdmin');
        const userId = url.searchParams.getAll('userId');
        console.log(`Full params are ${userId}`);
        console.log(`URL QUERY are ${JSON.stringify(urlQuery)}`);

        // const { data: payload } = await fetchAllProducts();
        // store.dispatch(getAllProducts(payload));
    } catch (error) {
        console.error(`Menu : Error occured : ${error}`);
    }
}
