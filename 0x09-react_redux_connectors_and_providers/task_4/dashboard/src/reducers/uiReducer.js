import { number } from 'prop-types';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const initial_state = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

const uiReducer = (state = initial_state, action) => {
  switch (action?.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);
    case LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', null);
    case LOGIN:
      return state.set('isUserLoggedIn', true).set('user', action.user);
    default:
      return state;
  }
};

export default uiReducer;
