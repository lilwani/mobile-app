import { createBrowserRouter } from 'react-router-dom';
import Login, { action as loginAction } from './features/users/Login';
import ErrorElement from './features/UI/ErrorElement';
import Signup, { action as signupAction } from './features/users/SignUp';
import ItemDetail from './features/products/ItemDetail';
import Menu, { loader as getAllProducts } from './features/products/Menu';
import App from './App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: 'users',
                children: [
                    {
                        index: true,
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
                        index: true,
                        path: 'menu/:id',
                        element: <Menu />,
                        errorElement: <ErrorElement />,
                        loader: getAllProducts,
                    },
                    {
                        path: 'item/:pId',
                        element: <ItemDetail />,
                        errorElement: <ErrorElement />,
                    },
                ],
            },
        ],
    },
]);
