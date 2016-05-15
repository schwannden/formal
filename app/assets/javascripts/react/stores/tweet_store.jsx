import { State, Navigation } from 'react-router';

import AppDispatcher from 'dispatcher';
import ActionType from 'action_type';
import AppEventEmiter from 'stores/app_event_emitter';

let forum = {
  tweets:     [],
  likes:      [],
  comments:   [],
  tweet:      {id: null, message: ""},
  actionType: null,
};

class TweetEventEmitter extends AppEventEmiter {

  countLikes(tweet) {
    let id = tweet.id;
    let count = 0, likes = forum.likes, n = likes.length;
    for (let i = 0 ; i < n ; i++) {
      if (likes[i].to_id == id) {
        count++;
      }
    }
    return count;
  }

  find_like(tweet) {
    let compare = (like) => {
      return like.from_id == user.id && like.to_id == tweet.id
    }
    let like = forum.likes.find(compare);
    return (like == undefined)? -1 : like.id;
  }

  comments(tweet) {
    let belongs_to = (tweet) => {
      return (comment) => comment.to_id == tweet.id;
    }
    return forum.comments.filter(belongs_to(tweet));
  }

  getTweets() {
    return forum.tweets.map(tweet => {
      tweet.key      = tweet.id;
      tweet.likes    = this.countLikes(tweet);
      tweet.like_id  = this.find_like(tweet);
      tweet.editable = tweet.user_id == user.id;
      tweet.message  = tweet.message.replace(/(?:\r\n|\r|\n)/g, '<br />');
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      tweet.comments = this.comments(tweet).map( comment => {
        comment.formattedDate = moment(comment.created_at).fromNow();
        return comment;
      });
      return tweet;
    });
  }

  getTweet() {
    let tweet = forum.tweet;
    return tweet;
  }

  getActionType() {
    return forum.actionType;
  }
}

let TweetStore = new TweetEventEmitter;

AppDispatcher.register(action => {
  forum.actionType = action.actionType;
  switch(action.actionType) {
    case ActionType.TWEET_INDEX:
      forum.tweets = action.data.tweets;
      forum.likes = action.data.likes;
      forum.comments = action.data.comments;
      TweetStore.emitChange();
      break;
    case ActionType.TWEET_CREATE:
      forum.tweets.unshift(action.rawTweet);
      TweetStore.emitChange();
      break;
    case ActionType.TWEET_EDIT:
      forum.tweet = action.rawTweet;
      TweetStore.emitChange();
      break;
    case ActionType.TWEET_UPDATE:
      TweetStore.emitChange();
      break;
    case ActionType.RECEIVED_LIKE:
      forum.likes.unshift(action.rawLike);
      TweetStore.emitChange();
      break;
    case ActionType.DELETED_LIKE:
      forum.likes = forum.likes.filter(like => {
        return like.id != action.deletedLike.id;
      });
      TweetStore.emitChange();
      break;
    case ActionType.RECEIVED_COMMENT:
      forum.comments.push(action.rawComment);
      TweetStore.emitChange();
      break;
    case ActionType.DELETED_COMMENT:
      forum.comments = forum.comments.filter(comment => {
        return comment.id != action.deletedComment.id;
      });
      TweetStore.emitChange();
      break;
    default:
  }
});

export default TweetStore;
