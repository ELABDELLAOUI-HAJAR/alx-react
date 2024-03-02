import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from "./uiActionTypes";


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
});
