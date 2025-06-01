import axios from 'axios';
import { DEV_URL } from '../constants';

export async function fetchAllProducts() {
    try {
        const url = `${DEV_URL}/products`;
        const res = await axios.get(url);
        return res;
    } catch (error) {
        console.error(
            `productAPIService/fetchAllProducts: Error occured : ${error}`,
        );
        return null;
    }
}

export async function getAdminProducts(id) {
    try {
        const url = `${DEV_URL}/products/${id}`;
        const res = await axios.get(url);
        return res;
    } catch (error) {
        console.error(
            `productAPIService/getAdminProducts: Error occured : ${error}`,
        );
        return null;
    }
}
