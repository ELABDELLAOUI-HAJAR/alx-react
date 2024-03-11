import { fromJS } from 'immutable';

export const filterTypeSelected = (state) => {
  return state.get('filter');
};

export const getNotifications = (state) => {
  return fromJS(
    Object.values(state.getIn(['notifications', 'entities', 'notifications']).toJS()));
};

export const getUnreadNotifications = (state) => {
  return fromJS(
    Object.values(state.getIn(['notifications', 'entities', 'notifications']).toJS()).filter((notif) => !notif.isRead)
  );
};
