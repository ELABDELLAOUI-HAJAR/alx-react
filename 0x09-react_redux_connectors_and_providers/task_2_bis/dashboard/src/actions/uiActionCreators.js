import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "./uiActionTypes";
import fetch from "node-fetch";


function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

function logout() {
  return { type: LOGOUT, };
}

function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER, };
}

function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER, };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

function boundLogin(email, password, dispatch) {
  return dispatch(login(email, password));
}

function boundLogout(dispatch) {
  return dispatch(logout());
}

function boundDisplayNotificationDrawer(dispatch) {
  return dispatch(displayNotificationDrawer());
}

function boundHideNotificationDrawer(dispatch) {
  return dispatch(hideNotificationDrawer());
}

function loginRequest(email, password) {
  /*return async (dispatch) => {
      boundLogin(email, password, dispatch);
      return fetch('/login-success.json')
          .then((response) => response.json())
          .then((json) => dispatch(loginSuccess()))
          .catch((err) => dispatch(loginFailure()));
  };*/

  return async (dispatch) => {
    try {
      boundLogin(email, password, dispatch);

      const response = await fetch('http://localhost:8080/login-success.json');
      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
}

export {
  login,
  logout,
  loginFailure,
  loginSuccess,
  displayNotificationDrawer,
  hideNotificationDrawer,
  boundDisplayNotificationDrawer,
  boundHideNotificationDrawer,
  boundLogin,
  boundLogout,
  loginRequest,
};
