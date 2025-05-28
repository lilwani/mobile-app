import React from 'react'
import { Form } from 'react-router-dom'
import store from '../../store'
import { userLogin } from '../../services/userApiServices'
import { getAllProducts } from '../products/productsSlice'

export default function Login() {
    return (
        <div className="flex-grow border-gray-950 rounded-2xl bg-amber-100 min-w-full my-4">
            <Form method="POST" className="flex flex-col">
                <div className="w-1/2 my-2">
                    <label htmlFor="email" className="pr-15">
                        Email
                    </label>
                    <input
                        name="email"
                        id="email"
                        type="email"
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
                        placeholder="JohnDoe@gmail.com"
                        className="placeholder-gray-300 border-1 rounded-lg w-80 text-center py-2"
                    />
                </div>
                <button className="bg-gray-600 px-2 py-2 rounded-2xl text-white">
                    Login
                </button>
            </Form>
        </div>
    )
}

export async function action({ request, params }) {
    const formData = await request.formData()

    const data = Object.fromEntries(formData)
    console.log(data)
    // const res = await userLogin()
    // console.log(res)
    store.dispatch(getAllProducts())
    
}
