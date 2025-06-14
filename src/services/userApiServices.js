import axios from 'axios';
import { DEV_URL } from '../constants';

export async function userLogin(data) {
    try {
        const url = `${DEV_URL}/users/login`;
        const header = {
            'content-type': 'application/json',
        };
        console.log(`Make backend call`);
        const res = await axios.post(url, data, header);
        console.log(`APi response of login is ${JSON.stringify(res)}`);
        return res?.data;
    } catch (error) {
        console.error(`userApiService/userLogin: Error occured : ${error}`);
        return error?.message ?? 'Unexpected error in userLogin';
    }
}

export async function userSignUp(data) {
    try {
        const url = `${DEV_URL}/users/signup`;
        const header = {
            'content-type': 'application/json',
        };
        const res = await axios.post(url, data, header);
        return res?.data;
    } catch (error) {
        console.error(`userApiService/userSignUp: Error occured : ${error}`);
        return error?.message ?? 'Unexpected error in userSignUp';
    }
}
