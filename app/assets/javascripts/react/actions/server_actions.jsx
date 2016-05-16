import AppDispatcher from 'dispatcher';
import ActionType from 'action_type';

export default {
  signup_successful() {
    AppDispatcher.dispatch({
      actionType: ActionType.SIGNUP_SUCCESSFUL,
    })
  },

  signup_error(error) {
    AppDispatcher.dispatch({
      actionType: ActionType.SIGNUP_ERROR,
      error: error,
    })
  },

  signin_successful() {
    AppDispatcher.dispatch({
      actionType: ActionType.SIGNIN_SUCCESSFUL,
    })
  },

  signin_error(error) {
    AppDispatcher.dispatch({
      actionType: ActionType.SIGNIN_ERROR,
      error: error,
    })
  },

  tweetIndex(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.TWEET_INDEX,
      data: data,
    })
  },

  tweetCreate(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.TWEET_CREATE,
      rawTweet: data
    })
  },

  tweetEdit(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.TWEET_EDIT,
      rawTweet: data
    })
  },

  tweetUpdate(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.TWEET_UPDATE,
      rawTweet: data
    })
  },

  likeCreate(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.LIKE_CREATE,
      rawLike: data
    })
  },

  likeDestroy(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.LIKE_DESTROY,
      deletedLike: data
    })
  },

  commentCreate(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.COMMENT_CREATE,
      rawComment: data
    })
  },

  commentEdit(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.COMMENT_EDIT,
      rawComment: data
    })
  },

  commentUpdate(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.COMMENT_UPDATE,
      rawComment: data
    })
  },

  commentDestroy(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.COMMENT_DESTROY,
      deletedComment: data
    })
  },

};

