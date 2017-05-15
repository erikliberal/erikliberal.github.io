import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
  render(){
    return (
      <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
          <NavLink exact className="mdl-navigation__link" activeClassName="is-active" to="/">Home</NavLink>
          <NavLink className="mdl-navigation__link" activeClassName="is-active" to="/about">About</NavLink>
      </nav>
    );
  }
}

export default NavBar;
