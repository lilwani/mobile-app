import React from 'react';
import { Form } from 'react-router-dom';
import { Button } from 'flowbite-react';

export default function SignUp() {
    return (
        <div className="flex-grow w-full h-full bg-amber-100 m-3">
            <Form
                method="POST"
                className="flex flex-col justify-center items-center"
            >
                <div>
                    <label className="pr-12">Email</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="JaneDoe@hotmail.com"
                        className="border-2 rounded-2xl text-center w-400px m-4"
                    />
                </div>
                <div>
                    <label className="pr-4">Password</label>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="jane@1234"
                        className="border-2 rounded-2xl text-center w-400px m-4"
                    />
                </div>
                <div>
                    <label className="pr-8">Admin user</label>
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 m-4"
                    />
                </div>
                <button className="w-full m-4 bg-slate-700 text-slate-200 rounded-2xl h-10 hover:bg-slate-600 hover:text-slate-100">
                    Sign me up
                </button>
            </Form>
        </div>
    );
}

export async function action({ request, params }) {
    console.log('Inside Sign up action');
    const formData = await request.formData();
    const body = Object.fromEntries(formData);
    //save in store and dispatch to menu
}
