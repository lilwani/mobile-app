import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function AppLayout() {
    return (
        <div className="flex min-h-screen items-center flex-col justify-between p-2">
            <Header />
                <Outlet />
            {/* <main className="flex-grow min-w-full min-h-full">
            </main> */}
            <Footer />
        </div>
    )
}
