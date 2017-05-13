import React from 'react';
import NavBar from '../NavBar/index.jsx';

class Drawer extends React.Component{
  render(){
    return (
      <div className="mdl-layout__drawer mdl-layout--small-screen-only" aria-hidden="true">
          <NavBar />
      </div>
    );
  }
}
export default Drawer;
