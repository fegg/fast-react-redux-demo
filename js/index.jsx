import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import routes from './routes';

let store = configureStore();
let rootElement = document.getElementById('app');

render(
    <div>
        <Provider store={store}>
            {routes}
        </Provider>
    </div>,
    rootElement
);