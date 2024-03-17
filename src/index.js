import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import router from './router/index.js';
import './assets/scss/style.scss';
import App from './components/App/App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App>
                <RouterProvider router={router} />
            </App>
        </Provider>
    </React.StrictMode>
);
