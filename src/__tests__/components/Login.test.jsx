import React from 'react';
import Login, { action as loginAction } from '../../features/users/Login.jsx';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../util/testUtil.jsx';
import ErrorElement from '../../features/UI/ErrorElement.jsx';
import { DEV_URL } from '../../constants.js';
import { redirect } from 'react-router-dom';

const handlers = [
    http.post(`${DEV_URL}/users/login`, async () => {
        return HttpResponse.json({
            message: {
                isError: false,
                data: {
                    userName: 'yashlol',
                    userId: 100,
                    isAdmin: true,
                    adminId: 1,
                    token: 'abcdef324be',
                },
            },
        });
    }),
];

const server = setupServer(...handlers);

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});

describe('Test Login Component', () => {
    test('should render successfully', async () => {
        const routes = [
            {
                path: '/users/login',
                element: <Login />,
                errorElement: <ErrorElement />,
                action: loginAction,
            },
            {
                path: '/products/menu/:id',
                element: <Login />,
                errorElement: <ErrorElement />,
                action: loginAction,
            },
        ];

        renderWithProviders(<Login />, {
            routes,
            initialEntries: ['/users/login', '/products/menu/:id'],
        });

        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('JohnDoe@gmail.com'),
        ).toBeInTheDocument();

        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('JohnDoe1234')).toBeInTheDocument();

        expect(screen.getAllByRole('button', { name: 'Login' }));

        expect(screen.queryAllByText('I am ErrorElement')).toHaveLength(0);
    });

    test('should redirect to product for admin on success', async () => {
        const routes = [
            {
                path: '/users/login',
                element: <Login />,
                errorElement: <ErrorElement />,
                action: loginAction,
            },
            {
                path: '/products/menu/:id',
                element: <Login />,
                errorElement: <ErrorElement />,
                action: loginAction,
            },
        ];
        const { store } = renderWithProviders(<Login />, {
            routes,
            initialEntries: ['/'],
        });

        const formData = new FormData();
        formData.append('username', 'yashlol');
        formData.append('password', 'yashlol@2025');

        const mockData = { formData: jest.fn().mockResolvedValue(formData) };
        // const storeSpy = jest.spyOn(store, 'dispatch');

        const res = await loginAction({ request: mockData });

        server.events.on('request:match', (req) => {
            if (req.url.pathname === '/users/login' && req.method === 'post') {
                expect(req.body).toEqual(mockData);
            }
        });
        // expect(storeSpy).toHaveBeenCalledTimes(1);
        expect(res).toEqual(redirect('/products/menu/100?isAdmin=true'));
    });
});
