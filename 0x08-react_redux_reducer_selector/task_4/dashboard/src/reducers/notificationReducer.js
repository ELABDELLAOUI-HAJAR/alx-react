import * as notifActions from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = fromJS({
  notifications: [],
  filter: [],
});

export function notificationReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case notifActions.FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge(
        fromJS({
          filter: notifActions.NotificationTypeFilters.DEFAULT,
          notifications: notificationsNormalizer(
            action.data.map((notification) => ({
              ...notification,
              isRead: false,
            }))
          ),
        })
      );

    case notifActions.MARK_AS_READ:
      return state.setIn(['notifications', 'entities', 'notifications', action.index, 'isRead'], true);

    case notifActions.SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}
