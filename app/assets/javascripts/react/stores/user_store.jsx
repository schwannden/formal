import AppDispatcher from 'dispatcher';
import ActionType from 'action_type';
import AppEventEmiter from 'stores/app_event_emitter';

let _user = {
  status: "",
  name: "",
  email: "",
  gravatar: "",
};

class UserEventEmitter extends AppEventEmiter {

  getUser() {
    return {
      name: _user.name,
      email: _user.email,
      gravatar: _user.gravatar,
    };
  }

  getName() {
    return _user.name;
  }

  getEmail() {
    return _user.email;
  }

  getGravatar() {
    return _user.gravatar;
  }

  getStatus() {
    return _user.status;
  }

  getErrors() {
    if (_user.error.responseJSON != undefined)
      return _user.error.responseJSON.errors;
    else
      return {"": _user.error.responseText};
  }
}

let UserStore = new UserEventEmitter;

AppDispatcher.register(action => {
  _user.status = action.actionType;
  switch(action.actionType) {
    case ActionType.GET_USER:
      _user.email    = action.user.email
      _user.name     = action.user.name
      _user.gravatar = action.user.gravatar
      UserStore.emitChange();
      break;
    case ActionType.SIGNUP_SUCCESSFUL:
    case ActionType.SIGNIN_SUCCESSFUL:
      UserStore.emitChange();
      break;
    case ActionType.SIGNIN_ERROR:
    case ActionType.SIGNUP_ERROR:
      _user.error = action.error;
      UserStore.emitChange();
      break;
    default:
  }
});

export default UserStore;
