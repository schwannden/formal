import API from 'API'

export default {
  getTweets() {
    API.getTweets();
  },

  createTweet(form_data) {
    API.createTweet(form_data);
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
