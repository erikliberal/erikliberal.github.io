import React from 'react';
import {Link} from 'react-router-dom';

function mapItemContentToPostElement(itm,idx){
  if (typeof itm === "string")
    return itm;

  return (
    <Post key={idx} {...itm} />
  );
}

class Post extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
        if (!this.props.type){
          return (
            <div className="mdl-cell mdl-cell--12-col">
                {this.props.content.map(mapItemContentToPostElement)}
            </div>
          );
        }
        if (this.props.type === 'image'){
          return (
            <img className={this.props.class} src={this.props.src} alt="" />
          );
        }
        if (this.props.type === 'paragraph'){
            return (
              <p>
                {this.props.content.map(mapItemContentToPostElement)}
              </p>
            );
        }
        if (this.props.type === 'anchor'){
          return (
            <a href={this.props.href} target={this.props.target}>
              {this.props.content.map(mapItemContentToPostElement)}
            </a>
          );
        }
        if (this.props.type === 'post'){
          return (
              <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text">{this.props.title}</h2>
                </div>
                <div className="mdl-card__media">
                  {this.props.media?this.props.media.map(mapItemContentToPostElement):null}
                </div>
                <div className="mdl-grid portfolio-copy">
                    {this.props.content.map(mapItemContentToPostElement)}
                </div>
              </div>
          );
        }
        if (this.props.type === 'preview-post'){
          return (
            <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                {this.props.media?
                (<div className="mdl-card__media">
                    <img className="article-image" src={this.props.media} alt="" />
                </div>):null
                }
                {this.props.title?
                (<div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{this.props.title}</h2>
                </div>):null
                }
                <div className="mdl-card__supporting-text">{this.props.supportingText}</div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" to={this.props.link} data-upgraded=",MaterialButton,MaterialRipple">Read more<span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></Link>
                </div>
            </div>
          );
        }
        console.log(this.props.type);
        return null;
    }
}

export default Post;
export {mapItemContentToPostElement};
