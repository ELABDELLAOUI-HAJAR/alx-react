import { createSelector } from 'reselect';

export const filterTypeSelected = (state) => {
  return state.get('filter');
};

export const getNotifications = (state) => {
  return state.getIn(['notifications', 'entities', 'messages']);
};

export const getUnreadNotificationsByType = createSelector(
  [getNotifications, filterTypeSelected],
  (notifications, filter) => {
    return Object.values(notifications.toJS()).filter(
      (notification) => !notification.isRead && notification.type.toUpperCase() === filter
    );
  }
);
