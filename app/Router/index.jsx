import React from 'react';
import {Route} from 'react-router-dom';
import App from '../App/index.jsx';
import Home from '../Home/index.jsx';
import About from '../About/index.jsx';

export default (
  <App>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
  </App>
);
