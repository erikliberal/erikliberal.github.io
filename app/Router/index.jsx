import React from 'react';
import {Route} from 'react-router-dom';
import Portfolio from '../templates/Portfolio/index.jsx';
import Home from '../Home/index.jsx';
import About from '../About/index.jsx';

export default (
  <Portfolio>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
  </Portfolio>
);
