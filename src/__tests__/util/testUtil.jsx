import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { setupStore } from '../../store';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

export const renderWithProviders = (ui, enhancedProperties = {}) => {
    const {
        preloadedState = {},
        store = setupStore(),
        routes = [],
        initialEntries = ['/'],
        initialIndex = 0,
        ...renderOptions
    } = enhancedProperties;

    const router = createMemoryRouter(routes, { initialEntries });

    function Wrapper({ children }) {
        return (
            <Provider store={store}>
                <RouterProvider router={router}>{children}</RouterProvider>
            </Provider>
        );
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export const renderWithProvidersWithoutRouter = (ui, enhancedOptions = {}) => {
    const {
        preloadedState = {},
        store = setupStore(),
        ...renderOptions
    } = enhancedOptions;

    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
