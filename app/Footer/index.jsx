import React from 'react';

class Footer extends React.Component{
  render(){
    return (
      <footer className="mdl-mini-footer">
          <div className="mdl-mini-footer__left-section">
              <div className="mdl-logo"></div>
          </div>
          <div className="mdl-mini-footer__right-section">
              <ul className="mdl-mini-footer__link-list">
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Privacy &amp; Terms</a></li>
              </ul>
          </div>
      </footer>
    );
  }
}
export default Footer;
