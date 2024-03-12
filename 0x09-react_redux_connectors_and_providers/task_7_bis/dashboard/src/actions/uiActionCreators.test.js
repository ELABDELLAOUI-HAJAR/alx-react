import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from './uiActionTypes';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  loginSuccess,
  loginFailure,
} from './uiActionCreators';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Test iActionCreator.js', () => {
  test('Test login action creator', () => {
    const expected = { type: LOGIN, user: { email: 'yassine@alx.com', password: '123456' } };
    const received = login('yassine@alx.com', '123456');

    expect(received).toEqual(expected);
  });

  test('Test logout action creator', () => {
    const expected = { type: LOGOUT };
    const received = logout();

    expect(received).toEqual(expected);
  });

  test('Test displayNotificationDrawer action creator', () => {
    const expected = { type: DISPLAY_NOTIFICATION_DRAWER };
    const received = displayNotificationDrawer();

    expect(received).toEqual(expected);
  });

  test('Test hideNotificationDrawer action creator', () => {
    const expected = { type: HIDE_NOTIFICATION_DRAWER };
    const received = hideNotificationDrawer();

    expect(received).toEqual(expected);
  });

  /*
  test('API request success', () => {
    const store = mockStore({});
    fetchMock.mock('/login-success.json', 200);

    const email = 'yassine@alx.com';
    const pass = '123456';

    store.dispatch(loginRequest(email, pass)()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login);
      expect(actions[1]).toEqual(loginSuccess);
    });

    fetchMock.restore();
  });

  test('API request failed', () => {
    const store = mockStore({});
    fetchMock.mock('/login-success.json', 400);

    store.dispatch(loginRequest()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login);
      expect(actions[1]).toEqual(loginFailure);
    });
    fetchMock.restore();
  });
  */
});
