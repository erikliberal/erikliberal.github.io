import alt from '../alt.js';
import PostActions from '../actions/PostActions.jsx';
import jquery from 'jquery';
import toastr from 'toastr';

class PostStore {
  constructor() {
    this.bindActions(PostActions);
    this.posts = {};
  }

  onGetPostsSuccess(result) {
    this.posts[result.path] = result.data;
  }

  onGetPostsFail(result) {
    toastr.error(result.path, result.error);
  }
}

export default alt.createStore(PostStore);
