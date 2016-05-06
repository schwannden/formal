import EventEmiter from 'events';

const CHANGE_EVENT = "change";

export default class AppEventEmitter extends EventEmiter {

  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
}
