import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onChange(state) {
  }

  render() {
    return (
      <div className="mdl-grid portfolio-max-width">

        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">About</h2>
          </div>
          <div className="mdl-card__media">
          </div>
          <div className="mdl-grid portfolio-copy">
            <img className="about-header-image" src="images/about-header.jpg" alt="" />
            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                <p>Desenvolvedor de software, palestrante</p>
                <p>Uma de minhas maiores paixões é o desenvolvimento de software. Considero um hobbie procurar novas abordagens e meios que possam aprimorar a minha experiência e dos outros nesse tópico. Meu foco na vida é encontrar novos meios de entregar software de qualidade, agregando o máximo de valor com mínimo de desgaste dos clientes e desenvolvedores</p>
            </div>
            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Contact</h3>
            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding">
              <p>
                email: <a href="mailto:erik.liberal@gmail.com">erik.liberal@gmail.com</a>
              </p>
            </div>
            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Social Media</h3>
            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding">
              <p>
                twitter: <a href="http://www.twitter.com/erikliberal">@erikliberal</a>
              </p>
            </div>
            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Other</h3>
            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding">
              <p>
                GitHub: <a href="https://github.com/erikliberal/">erikliberal</a>
              </p>
            </div>
            <h3 className="mdl-cell mdl-cell--12-col mdl-typography--headline">Capacitações</h3>
            <div className="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
              <a target="_blank" href="https://drive.google.com/file/d/0B2yCplB5LZnWcGYwSjNFdk1jR2s/view">
                <img className="about-header-image" src="images/O_Java-SE-8-OCA-clr.gif" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
