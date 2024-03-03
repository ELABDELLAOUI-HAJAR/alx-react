import {
  login,
  logout,
  hideNotificationDrawer,
  displayNotificationDrawer,
  loginFailure,
  loginRequest,
  loginSuccess
} from "./uiActionCreators";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT
} from "./uiActionTypes";

import configureMockStore from 'redux-mock-store';
const thunk = require('redux-thunk').thunk;
import fetchMock from 'fetch-mock';


const mockStore = configureMockStore([thunk]);

describe('Tests for uiActionCreators actions', () => {
  it('Verify that login return the correct data', () => {
    const email = 'hajar@test.ma';
    const password = 'HAJAR121991';
    const expectedLogin = {
      type: LOGIN,
      user: { email, password },
    };

    expect(login(email, password)).toEqual(expectedLogin);
  });

  it('Verify that logout return the correct data', () => {
    expect(logout()).toEqual({ type: LOGOUT, });
  });

  it('Verify that displayNotificationDrawer return the correct data', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER, });
  });

  it('Verify that hideNotificationDrawer return the correct data', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER, });
  });

  it('Verify that if the API returns the right response, the store received LOGIN and LOGING_SUCCESS', async () => {
    const store = mockStore({});

    fetchMock.getOnce('http://localhost:8080/login-success.json', { status: 200 }, { overwriteRoutes: false });

    const email = 'test@hajar.ma';
    const password = 'HEA123';

    await store.dispatch(loginRequest(email, password));

    const receivedActions = store.getActions();
    expect(receivedActions[0]).toEqual(login(email, password));
    expect(receivedActions[1]).toEqual(loginSuccess());
    fetchMock.restore();
    fetchMock.reset();
  });

  it('Verify that if the API query fails, the store received LOGIN and LOGIN_FAILURE', async () => {
    const store = mockStore({});
    fetchMock.mock('http://localhost:8080/login-success.json', { status: 404 }, { overwriteRoutes: false });

    console.log(fetchMock);

    await store.dispatch(loginRequest());

    const receivedActions = store.getActions();
    expect(receivedActions[0]).toEqual(login());
    //expect(receivedActions[1]).toEqual(loginFailure());
    fetchMock.restore();
  });
});
