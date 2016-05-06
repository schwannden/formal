import API from 'API'

export default {
  signup(form_data) {
    API.user_signup(form_data);
  },
  signin(form_data) {
    API.user_signin(form_data);
  },
};
