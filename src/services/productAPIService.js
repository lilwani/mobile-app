import axios from 'axios';
import { DEV_URL } from '../constants';

export async function fetchAllProducts(token) {
    try {
        console.log(`Get for user`);
        const url = `${DEV_URL}/products/all`;
        const res = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return res?.data;
    } catch (error) {
        console.log(
            `productAPIService/fetchAllProducts: Error occured : ${error}`,
        );
        return error?.message ?? 'Unexpected error in userLogin';
    }
}

export async function getAdminProducts(id, token) {
    try {
        console.log(`Get for admin`);
        const url = `${DEV_URL}/products/admin/${id}`;
        const res = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log('getAdminprods - ', res);
        return res?.data;
    } catch (error) {
        console.log(
            `productAPIService/getAdminProducts: Error occured : ${error}`,
        );
        return error?.message ?? 'Unexpected error in userLogin';
    }
}
