import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

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

export { markAsRead, setNotificationFilter, boundMarkAsRead, boundSetNotificationFilter };
