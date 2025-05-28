import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

export default function User() {
    return (
        <div className="flex min-w-1/4 text-black flex-row justify-between px-2">
            <UserCircleIcon className="w-10 h-10 text-gray-800" />
            <div>
                <ul className="flex flex-row w-full text-2xl">
                    <Link to="users/login" className="px-2 py-1">
                        Login
                    </Link>
                    <p className="px-1 py-1">/</p>
                    <Link to="users/signup" className="px-2 py-1">
                        Signup
                    </Link>
                </ul>
            </div>
        </div>
    )
}
