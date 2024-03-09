/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import App, { mapStateToProps } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uiReducer from '../reducers/uiReducer';

StyleSheetTestUtils.suppressStyleInjection();

const store = createStore(uiReducer);

const mountWithProvider = (component) => mount(<Provider store={ store }>{ component }</Provider>);

describe('<App /> when isLoggedIn is False', () => {
  let app;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    app = mountWithProvider(<App />);
  });

  afterEach(() => {
    app.unmount();
  });

  it('App renders without crashing', () => {
    expect(app.exists()).toBe(true);
  });
  it('App contains the Notifications component', () => {
    expect(app.find('Notifications')).toHaveLength(1);
  });
  it('App contains the Login component', () => {
    expect(app.find('Login')).toHaveLength(1);
  });

  it('App contains the Footer component', () => {
    expect(app.find('Footer')).toHaveLength(1);
  });
  it('App does not contains CourseList', () => {
    expect(app.find('CourseList')).toHaveLength(0);
  });

  /* it('Test when "CTRL+h" is pressed the logOut and alert funcs are called', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
    const instance = app.instance();

    instance.state.user = {
      email: 'test@test.com',
      password: 'test123',
      isLoggedIn: true
    };

    const keydownEvent = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });

    document.dispatchEvent(keydownEvent);

    expect(instance.state.user.isLoggedIn).toEqual(false);
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
  }); 

  it('Verify that the logIn function updates the state correctly', () => {
    app.instance().logIn('test@test.ma', 'test123');

    const user = app.state('user');

    expect(user.email).toEqual('test@test.ma');
    expect(user.password).toEqual('test123');
    expect(user.isLoggedIn).toEqual(true);
    app.unmount();
  }); */

  /* it('Verify that the logOut function updates the state correctly', () => {
    const app = mount(<App />);

    app.instance().logIn('test@test.ma', 'test123');
    app.state().logOut();

    const user = app.state('user');

    expect(user.email).toBe('');
    expect(user.password).toBe('');
    expect(user.isLoggedIn).toBe(false);
    app.unmount();
  });*/
});

/*describe('<App /> when isLoggedIn is True', () => {
  let app;
  beforeEach(() => {
    app = mountWithProvider(<App />);
    app.setState({
      user: {
        email: 'test@test.com',
        password: 'test123',
        isLoggedIn: true
      }
    });
  });

  afterEach(() => {
    app.unmount();
  });

  it('CourseList is included', () => {
    expect(app.find('CourseList')).toHaveLength(1);
  });

  it('Login is not included', () => {
    expect(app.find('Login')).toHaveLength(0);
  });

  it('Verify that markNotificationAsRead works as intended', () => {
    const listNotifsBefore = app.state().listNotifications;
    app.instance().markNotificationAsRead(2);
    const listNotifsAfter = app.state().listNotifications;

    expect(listNotifsAfter.length).not.toBe(listNotifsBefore.length);
  });
});*/

describe('Test for MapStateToProps', () => {
  it('Verify that the function returns the right object', () => {
    let state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true,
    });

    const returnedObj = mapStateToProps(state);
    const expected = {
      isLoggedIn: true,
      displayDrawer: true
    };

    expect(returnedObj).toEqual(expected);
  });
});
