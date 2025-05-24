import React from 'react'
import { Form } from 'react-router-dom'

export default function Login() {
    return (
        <div className='flex '>
            <Form method="POST">
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="JohnDoe@gmail.com"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="JohnDoe@gmail.com"
                    />
                </div>
            </Form>
        </div>
    )
}

export async function action({ request, params }) {

}
