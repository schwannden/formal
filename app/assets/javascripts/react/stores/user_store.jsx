import AppDispatcher from 'dispatcher';
import ActionType from 'action_type';
import AppEventEmiter from 'stores/app_event_emitter';

let _user = {
  status: "",
  error: "",
};

class UserEventEmitter extends AppEventEmiter {

  getState() {
    return _user;
  }

  getStatus() {
    return _user.status;
  }

  getError() {
    if (_user.error.responseText === "") 
      _user.error.responseText = "a temporary error has occured, please try later" 
    return "ERROR: " + _user.error.responseText;
  }
}

let UserStore = new UserEventEmitter;

AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionType.SIGNUP_SUCCESSFUL:
      _user.status = ActionType.SIGNUP_SUCCESSFUL;
      UserStore.emitChange();
      break;
    case ActionType.SIGNUP_ERROR:
      _user.status = ActionType.SIGNUP_ERROR;
      _user.error = action.error;
      UserStore.emitChange();
      break;
    case ActionType.SIGNIN_SUCCESSFUL:
      _user.status = ActionType.SIGNIN_SUCCESSFUL;
      UserStore.emitChange();
      break;
    case ActionType.SIGNIN_ERROR:
      _user.status = ActionType.SIGNIN_ERROR;
      _user.error = action.error;
      UserStore.emitChange();
      break;
    default:
  }
});

export default UserStore;