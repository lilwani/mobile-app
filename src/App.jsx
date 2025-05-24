import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './features/UI/AppLayout'
import Login from './features/users/Login'
import ErrorElement from './features/UI/ErrorElement'
import SignUp from './features/users/SignUp'
import Product from './features/products/Product'
import Menu from './features/products/Menu'

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: 'users',
                children: [
                    {
                        path: 'login',
                        element: <Login />,
                        errorElement: <ErrorElement />,
                    },
                    {
                        path: 'signup',
                        element: <SignUp />,
                        errorElement: <ErrorElement />,
                    },
                ],
            },
            {
                path: 'products',
                children: [
                    {
                        path: 'menu',
                        element: <Menu />,
                        errorElement: <ErrorElement />,
                    },
                    {
                        path: ':pId',
                        element: <Product />,
                        errorElement: <ErrorElement />,
                    },
                ],
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
