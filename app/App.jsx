import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import routes from './Router/index.jsx';

let history = createBrowserHistory();
ReactDOM.render(
    <Router hashType="noslash" history={history}>
        {routes}
    </Router>,
    document.getElementById('main-app')
);
