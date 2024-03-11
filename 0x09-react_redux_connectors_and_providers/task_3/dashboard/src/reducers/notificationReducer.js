import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initital_state = fromJS({
  notifications: [],
  filter: [],
});

export default notificationReducer = (state = initital_state, action) => {
  switch (action?.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge(
        fromJS({
          filter: NotificationTypeFilters.DEFAULT,
          notifications: notificationsNormalizer(
            action.data.map((notification) => ({
              ...notification,
              isRead: false,
            }))
          ),
        })
      );
    case MARK_AS_READ:
      return state.setIn(['notifications', 'entities', 'notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
};
