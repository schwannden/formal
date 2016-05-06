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

  receivedTweets(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_TWEETS,
      data: data,
    })
  },

  receivedTweet(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_TWEET,
      rawTweet: data
    })
  },

  receivedLike(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_LIKE,
      rawLike: data
    })
  },

  deletedLike(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.DELETED_LIKE,
      deletedLike: data
    })
  },

  receivedComment(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_COMMENT,
      rawComment: data
    })
  },

  deletedComment(data) {
    AppDispatcher.dispatch({
      actionType: ActionType.DELETED_COMMENT,
      deletedComment: data
    })
  },

};

