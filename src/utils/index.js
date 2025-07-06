import axios from 'axios';
import { DEV_URL } from '../constants';
import store from '../store';
import { getUserToken, setAccessToken } from '../features/users/userSlice';
import { jwtDecode } from 'jwt-decode';

const headers = { 'Content-Type': 'application/json', Authorization: `Bearer` };

const axiosInstance = axios.create({
    baseURL: DEV_URL,
    headers: headers,
});

axiosInstance.interceptors.request.use(async (req) => {
    try {
        if (req.url === '/users/login') return req;

        console.log(`Inside interceptor`);
        const userDetails = getUserToken(store.getState());
        console.log(`user det is ${JSON.stringify(userDetails)}`);
        const { exp } = jwtDecode(userDetails.token);
        console.log(`exp is ${exp}`);
        const isExpired = exp * 1000 < Date.now();

        if (!isExpired) return req;

        delete headers.Authorization;
        const resp = await axios.post(`${DEV_URL}/auth/refreshToken`, headers, {
            userId: userDetails['userId'],
        });

        if (!resp.isError) {
            store.dispatch(setAccessToken({ payload: { token: resp.data } }));
            return req;
        } else {
            console.log(
                `Error in req interceptor: refresh call ${JSON.stringify(
                    resp,
                )}`,
            );
            throw error;
        }
    } catch (error) {
        console.log(`Error in req interceptor ${JSON.stringify(error)}`);
        throw error;
    }
});

axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
        console.log(`Error in res interceptor ${JSON.stringify(error)}`);
        throw error;
    },
);

export default axiosInstance;
