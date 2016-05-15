import API from 'API'

export default {
  tweetIndex() {
    API.tweetIndex();
  },

  tweetCreate(form_data) {
    API.tweetCreate(form_data);
  },

  tweetEdit(id) {
    API.tweetEdit(id);
  },

  tweetUpdate(id, form_data) {
    API.tweetUpdate(id, form_data);
  },

  createLike(tweet_id) {
    API.createLike(tweet_id);
  },

  deleteLike(like_id) {
    API.deleteLike(like_id);
  },

  createComment(tweet_id) {
    API.createComment(tweet_id);
  },

  deleteComment(comment_id) {
    API.deleteComment(comment_id);
  },

}
