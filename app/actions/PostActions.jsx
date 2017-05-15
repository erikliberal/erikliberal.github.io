import alt from '../alt';
import superagent from 'superagent';

class PostActions {
  constructor() {
    this.generateActions(
      'getPostsSuccess',
      'getPostsFail'
    );
  }

  getPosts(path) {
    superagent.get(['/data','pages', path, 'posts.json'].join('/').replace(/\/\//g,'/')).end((err, resp)=>{
      if (err){
        this.getPostsFail({path:path, error:err});
      } else {
        this.getPostsSuccess({path:path, data:resp.body});
      }
    });
    return [];
  }
}

export default alt.createActions(PostActions);
