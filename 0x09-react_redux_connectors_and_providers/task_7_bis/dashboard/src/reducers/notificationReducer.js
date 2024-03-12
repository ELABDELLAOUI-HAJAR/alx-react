import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
} from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initital_state = fromJS({
  notifications: {
    entities: {
      messages: {},
      users: {},
      notifications: {},
    },
  },
  filter: NotificationTypeFilters.DEFAULT,
  loading: false,
});

const notificationReducer = (state = initital_state, action) => {
  switch (action?.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep(
        fromJS({
          notifications: notificationsNormalizer(
            action.data.map((notification) => ({
              ...notification,
              isRead: false,
            }))
          ),
        })
      );
    case MARK_AS_READ:
      return state.setIn(['notifications', 'entities', 'messages', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case SET_LOADING_STATE:
      return state.set('loading', action.loadingState);
    default:
      return state;
  }
};

export default notificationReducer;
