import React from 'react';
import { Form, redirect } from 'react-router-dom';
import store from '../../store';
import { userLogin } from '../../services/userApiServices';
import { login, setUserError } from './userSlice';

export default function Login() {
    return (
        <div className="flex-grow border-gray-950 rounded-2xl bg-amber-100 min-w-full my-4">
            <Form method="POST" className="flex flex-col">
                <div className="w-1/2 my-2">
                    <label htmlFor="username" className="pr-15">
                        Email
                    </label>
                    <input
                        name="username"
                        id="username"
                        type="text"
                        placeholder="JohnDoe@gmail.com"
                        className="placeholder-gray-300 border-1 rounded-lg w-80 text-center py-2"
                    />
                </div>
                <div className="w-1/2 my-2">
                    <label htmlFor="password" className="pr-8">
                        Password
                    </label>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="JohnDoe1234"
                        className="placeholder-gray-300 border-1 rounded-lg w-80 text-center py-2"
                    />
                </div>
                <button className="bg-gray-600 px-2 py-2 rounded-2xl text-white">
                    Login
                </button>
            </Form>
        </div>
    );
}

export async function action({ request }) {
    try {
        console.log('inside action login');
        const formData = await request.formData();
        const actualFormData = Object.fromEntries(formData);
        console.log(`Calling backend for login`);
        const data = await userLogin(actualFormData);
        console.log(`userLogin response - ${JSON.stringify(data)}`);
        if (data) {
            console.log(`Data received `);
            const { isError, data: userData } = data['message'];

            if (isError) {
                const { errorMessage } = data['message'];
                console.log(`Found an error in login loader`);
                const payload = {
                    isError,
                    errorMessage,
                };
                // if(typeof errorMessage === Object){
                // }
                store.dispatch(setUserError(payload));
                return true;
            }
            const payload = { ...userData };
            console.log(`Set the uesr data in slice`);
            store.dispatch(login(payload));
            console.log(`Redirect to products`);
            const x = store.getState();
            return redirect(
                `/products/menu/${userData['userId']}?isAdmin=${userData['isAdmin']}`,
            );
        } else {
            store.dispatch(setUserError());
        }
    } catch (error) {
        console.error(`Login : Error occured : ${error}`);
    }
}
