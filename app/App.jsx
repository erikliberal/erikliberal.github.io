import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import routes from './Router/index.jsx';

let history = createBrowserHistory();
ReactDOM.render(
    <BrowserRouter history={history}>
        {routes}
    </BrowserRouter>,
    document.getElementById('main-app')
);
