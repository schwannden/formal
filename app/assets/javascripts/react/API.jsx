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
  
  tweetEdit(id) {
    $.get("/tweets/" + id)
      .success(data => ServerActions.tweetEdit(data))
      .error(error => console.log(error));
  },
  
  tweetCreate(form_data) {
    $.post("/tweets", form_data)
      .success(data => ServerActions.tweetCreate(data))
      .error(error => console.log(error));
  },

  createLike(tweet_id) {
    let params = {"like": {"to_id": tweet_id}};
    $.post("/likes", params)
      .success(data => ServerActions.receivedLike(data))
      .error(error => console.log(error));
  },

  deleteLike(like_id) {
    $.post("/likes/" + like_id, {_method: "delete"})
      .success(data => ServerActions.deletedLike(data))
      .error(error => console.log(error));
  },

  createComment(form_data) {
    $.post("/comments", form_data)
      .success(data => ServerActions.receivedComment(data))
      .error(error => console.log(error));
  },

  deleteComment(comment_id) {
    $.post("/comments/" + comment_id, {_method: "delete"})
      .success(data => ServerActions.deletedComment(data))
      .error(error => console.log(error));
  },

}
