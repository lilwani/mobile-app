import React from 'react';
import {
    fetchAllProducts,
    getAdminProducts,
} from '../../services/productAPIService';
import store from '../../store';
import { useSelector } from 'react-redux';
import Item from './Item';
import { setProductError, setProducts } from './productsSlice';
import { getUserToken } from '../users/userSlice';
import FilterProds from './FilterProds';

export default function Menu() {
    const allProducts = useSelector((state) => state.products.products);

    return (
        <div>
            <FilterProds />
            <ul className="flex flex-wrap flex-row px-50">
                {allProducts.map((product) => (
                    <Item product={product} key={product.id} />
                ))}
            </ul>
        </div>
    );
}

export async function loader({ request, params }) {
    try {
        console.log(`Inside Menu loader`);
        const stateData = store.getState();
        const { token, adminId } = getUserToken(stateData);
        console.log(`User token is ${JSON.stringify(token)}`);
        const url = new URL(request.url);
        const isAdmin = url.searchParams.get('isAdmin');
        console.log(isAdmin);
        if (isAdmin == 'false') {
            console.log(`Not isAdmin call`);
            const data = await fetchAllProducts(token);
            console.log(`Products are ${JSON.stringify(data)}`);
            const { isError, data: userData } = data['message'];

            if (isError) {
                const { errorMessage } = data['message'];
                console.log(`Found an error in login loader`);
                const payload = {
                    isError,
                    errorMessage,
                };
                store.dispatch(setProductError(payload));
                return true;
            }
            const payload = [...userData];
            store.dispatch(setProducts(payload));
        } else {
            console.log(`isAdmin call`);
            const userId = params.id;
            const data = await getAdminProducts(adminId, token);
            console.log(`Products are ${JSON.stringify(data)}`);
            const { isError, data: adminData } = data['message'];

            if (isError) {
                const { errorMessage } = data['message'];
                console.log(`Found an error in login loader`);
                const payload = {
                    isError,
                    errorMessage,
                };
                store.dispatch(setProductError(payload));
                return true;
            }
            const payload = [...adminData];
            store.dispatch(setProducts(payload));
        }
    } catch (error) {
        console.error(`Menu : Error occured : ${error}`);
    }
}
