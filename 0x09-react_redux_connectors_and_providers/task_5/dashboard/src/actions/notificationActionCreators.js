import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';

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

const boundMarkAsRead = (index) => dispatch(markAsRead(index));
const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

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
  }
}

const fetchNotifications = () => (dispatch) => {
  dispatch(setLoadingState(true));
  return fetch('http://localhost:8080/notifications.json')
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
