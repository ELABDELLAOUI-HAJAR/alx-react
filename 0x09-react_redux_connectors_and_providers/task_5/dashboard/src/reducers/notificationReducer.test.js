import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import notificationReducer, { initital_state } from './notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';
import { fromJS } from 'immutable';

describe('Test notificationReducer', () => {
  it('Test with no action', () => {
    expect(notificationReducer()).toEqual(initital_state);
  });
  it('Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };

    const received_state = notificationReducer(initital_state, action);
    const expected_state = initital_state.merge({
      filter: NotificationTypeFilters.DEFAULT,
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
    const initial_state = fromJS({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: notificationsNormalizer([
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ]),
    });
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const received_state = notificationReducer(initial_state, action);
    const expected_state = initial_state.setIn(
      ['notifications', 'entities', 'notifications', action.index, 'isRead'],
      true
    );

    expect(expected_state.toJS()).toEqual(received_state.toJS());
  });
  it('Test that SET_TYPE_FILTER changes filter attribute', () => {
    const initial_state = fromJS({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: notificationsNormalizer([
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ]),
    });
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const received_state = notificationReducer(initial_state, action);
    const expected_state = initial_state.set('filter', action.filter);

    expect(expected_state.toJS()).toEqual(received_state.toJS());
  });
});
