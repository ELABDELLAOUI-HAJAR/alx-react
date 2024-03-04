import * as notifActions from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = fromJS({
  notifications: [],
  filter: notifActions.NotificationTypeFilters,
});

export function notificationReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case notifActions.FETCH_NOTIFICATIONS_SUCCESS:
      const normalizData = notificationsNormalizer(action.data);
      Object.keys(normalizData).map((key) => {
        normalizData[key].isRead = false;
      });
      return state.merge(normalizData);

    case notifActions.MARK_AS_READ:
      return state.setIn(['notifications', 'entities', 'notifications', action.index, 'isRead'], true);

    case notifActions.SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}
