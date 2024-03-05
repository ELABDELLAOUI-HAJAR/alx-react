import { markAsAread, setNotificationFilter } from '../actions/notificationActionCreators';
import * as notifActions from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { initialState, notificationReducer } from './notificationReducer';
import { fromJS } from 'immutable';

describe('Tests for notificationReducer', () => {
  it('Test the return state when no action is passing', () => {
    expect(notificationReducer()).toEqual(initialState);
  });

  it('Test that notificationReducer returns the correct data when passing FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const action = {
      type: notifActions.FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };

    const received_state = notificationReducer(initialState, action);
    const expected_state = initialState.merge({
      filter: notifActions.NotificationTypeFilters.DEFAULT,
      notifications: notificationsNormalizer(
        action.data.map((notification) => ({
          ...notification,
          isRead: false,
        }))
      ),
    });

    expect(expected_state.toJS()).toEqual(received_state.toJS());
  });

  it('Test that MARK_AS_READ returns the data with the right item updated', () => {
    const initState = fromJS({
      filter: notifActions.NotificationTypeFilters.DEFAULT,
      notifications: notificationsNormalizer([
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ]),
    });

    const response = notificationReducer(initState, markAsAread(2));
    const expectedState = initState.setIn(
      ['notifications', 'entities', 'notifications', 2, 'isRead'], true
    );

    expect(response.toJS()).toEqual(expectedState.toJS());
  });

  it('Test that SET_TYPE_FILTER changes filter attribute', () => {
    const initState = fromJS({
      filter: notifActions.NotificationTypeFilters.DEFAULT,
      notifications: notificationsNormalizer([
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ]),
    });

    const response = notificationReducer(initState, setNotificationFilter(notifActions.NotificationTypeFilters.URGENT));
    const expectedState = initState.set('filter', notifActions.NotificationTypeFilters.URGENT);

    expect(response.toJS()).toEqual(expectedState.toJS());
  });
});
