import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

describe('Test notificationActionCreators.js', () => {
  test('Test markAsRead', () => {
    const received = markAsRead(1);
    const expected = { type: MARK_AS_READ, index: 1 };

    expect(expected).toEqual(received);
  });
  test('Test setNotificationFilter', () => {
    const received = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    const expected = { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.DEFAULT };

    expect(expected).toEqual(received);
  });
});
