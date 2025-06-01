import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppLayout from './features/UI/AppLayout';
import Login, { action as loginAction } from './features/users/Login';
import ErrorElement from './features/UI/ErrorElement';
import Signup, { action as signupAction } from './features/users/SignUp';
import Product from './features/products/Product';
import Menu, { loader as getAllProducts } from './features/products/Menu';

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
                        action: loginAction,
                    },
                    {
                        path: 'signup',
                        element: <Signup />,
                        errorElement: <ErrorElement />,
                        action: signupAction,
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
                        loader: getAllProducts,
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
]);

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
