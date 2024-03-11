import { combineReducers } from 'redux';
import courses from './courseReducer';
import notifications from './notificationReducer';
import ui from './uiReducer';

const rootReducer = combineReducers({
  courses,
  notifications,
  ui,
});

export default rootReducer;
