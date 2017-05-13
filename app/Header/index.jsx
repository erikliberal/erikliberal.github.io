import React from 'react';
import NavBar from '../NavBar/index.jsx';

class Header extends React.Component{
  render(){
    return (
      <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
        <div aria-expanded="false" role="button" tabIndex="0" className="mdl-layout__drawer-button mdl-layout--small-screen-only"><i className="material-icons"></i></div>
          <div className="mdl-layout__header-row portfolio-logo-row">
              <span className="mdl-layout__title">
                  <span className="mdl-layout__title"></span>
              </span>
          </div>
          <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
              <NavBar />
          </div>
      </header>
    );
  }
}

export default Header;
