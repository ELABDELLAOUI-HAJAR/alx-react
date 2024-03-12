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
        {
          context: {
            guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
            isRead: true,
            type: 'urgent',
            value: 'Consectetur adipiscing elit.',
          },
        },
        {
          context: {
            guid: '2d8e40be-1c78-4de0-afc9-fcc147td4d2',
            isRead: false,
            type: 'urgent',
            value: 'Lorem ipsum dolor sit amet',
          },
        },
        {
          context: {
            guid: '2d8e40be-1c78-4de0-afc9-fcc147bfd4d2',
            isRead: false,
            type: 'urgent',
            value: 'Sit amet, consectetur adipiscing elit, sed.',
          },
        },
      ],
    };

    state = notificationReducer(initital_state, action);
  });

  it('test that filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(state)).toBe(NotificationTypeFilters.DEFAULT);
  });

  it('test that getNotifications returns a list of the message entities within the reducer', () => {
    const expected = action.data.map(({ context }) => context);
    expect(getNotifications(state)).toEqual(expected);
  });

  it('test that getUnreadNotifications return a list of the message entities within the reducer', () => {
    let state = fromJS({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: notificationsNormalizer(action.data),
    });

    const unReadNotifications = [
      {
        guid: '2d8e40be-1c78-4de0-afc9-fcc147td4d2',
        isRead: false,
        type: 'urgent',
        value: 'Lorem ipsum dolor sit amet',
      },
      {
        guid: '2d8e40be-1c78-4de0-afc9-fcc147bfd4d2',
        isRead: false,
        type: 'urgent',
        value: 'Sit amet, consectetur adipiscing elit, sed.',
      },
    ];

    expect(getUnreadNotifications(state)).toEqual(unReadNotifications);
  });
});
