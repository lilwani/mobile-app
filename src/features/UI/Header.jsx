import React from 'react';
import { PhoneArrowDownLeftIcon } from '@heroicons/react/16/solid';
import User from '../users/User';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="flex flex-row justify-between space-x-3 w-full px-4 bg-gray-500 border-2 rounded-xl py-4">
            <div>
                <Link to="/products/menu" className="flex space-x-4 ">
                    <PhoneArrowDownLeftIcon className="h-10 w-10 text-blue-400" />
                    <p className="font-serif text-4xl tracking-wide text-white">
                        Mobile Cart
                    </p>
                </Link>
            </div>
            <User />
        </header>
    );
}
