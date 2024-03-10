/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import App, { mapStateToProps, StatelessApp } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App /> when isLoggedIn is False', () => {
  let app;
  beforeEach(() => {
    app = mount(<StatelessApp />);
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

  it('App contains the Header component', () => {
    expect(app.find('Header')).toHaveLength(1);
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
});

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
