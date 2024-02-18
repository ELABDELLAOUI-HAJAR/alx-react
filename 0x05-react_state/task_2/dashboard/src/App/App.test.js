/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App /> when isLoggedIn is False', () => {
  it('App renders without crashing', () => {
    const app = shallow(<App />);
    expect(app.exists()).toBe(true);
  });
  it('App contains the Notifications component', () => {
    const app = shallow(<App />);
    expect(app.find('Notifications')).toHaveLength(1);
  });
  it('App contains the Header component', () => {
    const app = shallow(<App />);
    expect(app.find('Header')).toHaveLength(1);
  });
  it('App contains the Login component', () => {
    const app = shallow(<App />);
    expect(app.find('Login')).toHaveLength(1);
  });
  it('App contains the Footer component', () => {
    const app = shallow(<App />);
    expect(app.find('Footer')).toHaveLength(1);
  });
  it('App does not contains CourseList', () => {
    const app = shallow(<App />);
    expect(app.find('CourseList')).toHaveLength(0);
  });
  it('Test when "CTRL+h" is pressed the logOut and alert funcs are called', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
    const wrapper = mount(<App />);

    wrapper.instance().state.user = {
      email: 'test@test.com',
      password: 'test123',
      isLoggedIn: true
    };

    const keydownEvent = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });

    document.dispatchEvent(keydownEvent);

    expect(wrapper.instance().state.user.isLoggedIn).toEqual(false);
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
    wrapper.unmount();
  });

  it('Verify that the logIn function updates the state correctly', () => {
    const app = mount(<App />);

    app.instance().logIn('test@test.ma', 'test123');

    const user = app.state('user');

    expect(user.email).toEqual('test@test.ma');
    expect(user.password).toEqual('test123');
    expect(user.isLoggedIn).toEqual(true);
  });

  it('Verify that the logOut function updates the state correctly', () => {
    const app = mount(<App />);

    app.instance().logIn('test@test.ma', 'test123');
    app.state().logOut();

    const user = app.state('user');

    expect(user.email).toBe('');
    expect(user.password).toBe('');
    expect(user.isLoggedIn).toBe(false);
  });

});

describe('<App /> when isLoggedIn is True', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
    app.setState({
      user: {
        email: 'test@test.com',
        password: 'test123',
        isLoggedIn: true
      }
    });
  });

  it('CourseList is included', () => {
    expect(app.find('CourseList')).toHaveLength(1);
  });
  it('Login is not included', () => {
    expect(app.find('Login')).toHaveLength(0);
  });
});


describe('<App /> test states', () => {
  it('Check that the default state for displayDrawer is false and that after calling handleDisplayDrawer, the state should be true', () => {
    const app = shallow(<App />);
    expect(app.state('displayDrawer')).toEqual(false);

    app.instance().handleDisplayDrawer();
    expect(app.state('displayDrawer')).toEqual(true);
  });
  it('Check that after calling handleHideDrawer, the state is updated to be false', () => {
    const app = shallow(<App />);

    app.instance().handleDisplayDrawer();
    app.instance().handleHideDrawer();
    expect(app.state('displayDrawer')).toEqual(false);
  });
});
