import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function AppLayout() {
    return (
        <div className="flex flex-col justify-between mx-auto my-auto ">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
