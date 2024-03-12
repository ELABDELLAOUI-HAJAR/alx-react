import courses from './courseReducer';
import ui from './uiReducer';
import notifications from './notificationReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  courses,
  notifications,
  ui,
});
