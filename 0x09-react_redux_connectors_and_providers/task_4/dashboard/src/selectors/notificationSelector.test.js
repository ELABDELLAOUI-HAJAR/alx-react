import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, NotificationTypeFilters } from '../actions/notificationActionTypes';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import notificationReducer, { initital_state } from '../reducers/notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';
import { fromJS } from 'immutable';

describe('Test notificationSelector', () => {
  let state;
  let action;
  beforeEach(() => {
    action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };

    state = notificationReducer(initital_state, action);
  });

  it('test that filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(state)).toBe(NotificationTypeFilters.DEFAULT);
  });

  it('test that getNotifications returns a list of the message entities within the reducer', () => {
    const expected = action.data.map((notif) => ({ ...notif, isRead: false }));
    expect(getNotifications(state).toJS()).toEqual(expected);
  });

  it('test that getUnreadNotifications return a list of the message entities within the reducer', () => {
    let state = fromJS({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: notificationsNormalizer([
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ]),
    });

    const unReadNotifications = [
      { id: 1, type: 'default', value: 'New course available', isRead: false },
      { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    ];

    expect(getUnreadNotifications(state).toJS()).toEqual(unReadNotifications);
  });
});
