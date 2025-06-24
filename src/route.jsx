import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './features/UI/AppLayout';
import ErrorElement from './features/UI/ErrorElement';
import Login, { action as loginAction } from './features/users/Login';
import SignUp, { action as signupAction } from './features/users/SignUp';
import Menu, { loader as getAllProducts } from './features/products/Menu';
import Product from './features/products/Product';

export const router = createBrowserRouter([
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
            element: <SignUp />,
            errorElement: <ErrorElement />,
            action: signupAction,
          },
        ],
      },
      {
        path: 'products',
        children: [
          {
            path: 'menu/:id',
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
