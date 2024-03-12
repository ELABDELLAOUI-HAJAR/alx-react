import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';
import fetch from 'node-fetch';

function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

const boundMarkAsRead = (index) => (dispatch) => dispatch(markAsRead(index));
const boundSetNotificationFilter = (filter) => (dispatch) => dispatch(setNotificationFilter(filter));

function setLoadingState(loadingState) {
  return {
    type: SET_LOADING_STATE,
    loadingState,
  };
}

function setNotifications(data) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
  };
}

const fetchNotifications = () => (dispatch) => {
  dispatch(setLoadingState(true));

  const baseURL = 'http://localhost:8080';
  return fetch(new URL('/notifications.json', baseURL))
    .then((res) => res.json())
    .then((data) => dispatch(setNotifications(data)))
    .finally(() => dispatch(setLoadingState(false)));
};

export {
  markAsRead,
  setNotificationFilter,
  boundMarkAsRead,
  boundSetNotificationFilter,
  setLoadingState,
  setNotifications,
  fetchNotifications,
};
