import {
  MARK_AS_READ, SET_TYPE_FILTER,
  NotificationTypeFilters, SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';
import { markAsRead, setNotificationFilter, setLoadingState, setNotifications } from './notificationActionCreators';

describe('Test notificationActionCreators.js', () => {
  it('Test markAsRead', () => {
    const received = markAsRead(1);
    const expected = { type: MARK_AS_READ, index: 1 };

    expect(received).toEqual(expected);
  });
  it('Test setNotificationFilter', () => {
    const received = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    const expected = { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.DEFAULT };

    expect(expected).toEqual(received);
  });
  it('Test of setLoadingState action', () => {
    const received = setLoadingState(true);
    const expected = { type: SET_LOADING_STATE, loading: true };

    expect(received).toEqual(expected);
  });
  it('Test of setNotifications action', () => {
    const received = setNotifications('randomData');
    const expected = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: 'randomData',
    };

    expect(received).toEqual(expected);
  });
});
