import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserToken } from './userSlice';

export default function User() {
    const { userName } = useSelector(getUserToken);

    return (
        <div className="flex min-w-[80px] text-black flex-row px-2">
            <UserCircleIcon className="w-10 h-10 text-gray-800 " />
            <h4 className="text-2xl uppercase px-2 py-1 font-bold text-cyan-300">
                {userName ?? null}
            </h4>
            <div>
                <ul className="flex flex-row w-full text-2xl px-2">
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
    );
}
