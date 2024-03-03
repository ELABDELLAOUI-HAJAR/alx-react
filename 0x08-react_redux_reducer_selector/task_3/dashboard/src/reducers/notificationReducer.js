import * as notifActions from '../actions/notificationActionTypes';

export const initialState = {
  notifications: [],
  filter: notifActions.NotificationTypeFilters,
};

export function notificationReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case notifActions.FETCH_NOTIFICATIONS_SUCCESS:
      return action.data.map((notif) => ({ ...notif, isRead: false }));

    case notifActions.MARK_AS_READ:
      return state.map((notif) => (notif.id === action.index ? { ...notif, isRead: true } : [...notif]));

    case notifActions.SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      };

    default:
      return state;
  }
}
