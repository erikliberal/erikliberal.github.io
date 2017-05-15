import React from 'react';
import {Link} from 'react-router-dom';
import PostStore from '../stores/PostStore.jsx';
import PostActions from '../actions/PostActions.jsx';
import {mapItemContentToPostElement} from '../components/Post.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {posts:PostStore.getState().posts['/']||[]};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    PostStore.listen(this.onChange);
    PostActions.getPosts('/');
  }

  componentWillUnmount() {
    PostStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState({posts:state.posts['/']});
  }

  render() {
    return (
      <div className="mdl-grid portfolio-max-width">
          {this.state.posts.map(mapItemContentToPostElement)}
      </div>
    );
  }
}

export default Home;
