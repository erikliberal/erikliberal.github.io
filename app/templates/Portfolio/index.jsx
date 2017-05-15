import React from 'react';
import Drawer from './Drawer/index.jsx';
import Header from './Header/index.jsx';


class Portfolio extends React.Component {
  render(){
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header has-drawer is-upgraded" data-upgraded=",MaterialLayout">
          <Header />
          <Drawer />
          <main className="mdl-layout__content">
              {this.props.children}
          </main>
          <div className="mdl-layout__obfuscator"></div>
      </div>
    );
  }
}
export default Portfolio;
