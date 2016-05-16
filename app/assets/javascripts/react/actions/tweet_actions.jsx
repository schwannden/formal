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

  likeCreate(tweet_id) {
    API.likeCreate(tweet_id);
  },

  likeDestroy(tweet_id, like_id) {
    API.likeDestroy(tweet_id, like_id);
  },

  commentCreate(tweet_id, form_data) {
    API.commentCreate(tweet_id, form_data);
  },

  commentEdit(tweet_id, comment_id) {
    API.commentEdit(tweet_id, comment_id);
  },

  commentUpdate(tweet_id, comment_id, form_data) {
    API.commentUpdate(tweet_id, comment_id, form_data);
  },

  commentDestroy(tweet_id, comment_id) {
    API.commentDestroy(tweet_id, comment_id);
  },

}
