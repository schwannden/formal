import ServerActions from 'actions/server_actions'

export default {
  user_signup (form_data) {
    $.post('/users', form_data)
      .success(response => {
        ServerActions.signup_successful();
      })
      .error(error => {
        ServerActions.signup_error(error);
      });
  },

  user_signin (form_data) {
    $.post('/users/sign_in', form_data)
      .success(response => {
        ServerActions.signin_successful();
      })
      .error(error => {
        ServerActions.signin_error(error);
      });
  },

  tweetIndex() {
    $.get("/tweets")
      .success(data => ServerActions.tweetIndex(data))
      .error(error => console.log(error));
  },
  
  tweetCreate(form_data) {
    $.post("/tweets", form_data)
      .success(data => ServerActions.tweetCreate(data))
      .error(error => console.log(error));
  },

  tweetEdit(id) {
    $.get("/tweets/"+id+"/edit")
      .success(data => ServerActions.tweetEdit(data))
      .error(error => console.log(error));
  },
  
  tweetUpdate(id, form_data) {
    $.post("/tweets/" + id, form_data)
      .success(data => ServerActions.tweetUpdate(data))
      .error(error => console.log(error));
  },
  
  likeCreate(tweet_id) {
    $.post("/tweets/" + tweet_id + "/likes")
      .success(data => ServerActions.likeCreate(data))
      .error(error => console.log(error));
  },

  likeDestroy(tweet_id, like_id) {
    $.post("/tweets/" + tweet_id + "/likes/" + like_id, {_method: "delete"})
      .success(data => ServerActions.likeDestroy(data))
      .error(error => console.log(error));
  },

  commentCreate(tweet_id, form_data) {
    $.post("/tweets/" + tweet_id + "/comments", form_data)
      .success(data => ServerActions.commentCreate(data))
      .error(error => console.log(error));
  },

  commentDestroy(tweet_id, comment_id) {
    $.post("/tweets/" + tweet_id + "/comments/" + comment_id, {_method: "delete"})
      .success(data => ServerActions.commentDestroy(data))
      .error(error => console.log(error));
  },

}
