import axios from 'axios';
import { DEV_URL } from '../constants';

export async function userLogin(data) {
    try {
        const url = `${DEV_URL}/users/login`;
        const header = {
            'content-type': 'application/json',
        };
        const res = await axios.post(url, data, header);
        return res;
    } catch (error) {
        console.error(`userApiService/userLogin: Error occured : ${error}`);
        return null;
    }
}

export async function userSignUp(data) {
    try {
        const url = `${DEV_URL}/users/signup`;
        const header = {
            'content-type': 'application/json',
        };
        const res = await axios.post(url, data, header);
        return res;
    } catch (error) {
        console.error(`userApiService/userSignUp: Error occured : ${error}`);
        return null;
    }
}
