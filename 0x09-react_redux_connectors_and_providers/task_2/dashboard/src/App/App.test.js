/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { mapStateToProps, StatelessApp } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
  let app;
  beforeEach(() => {
    app = shallow(<StatelessApp displayDrawer={ false } />);
  });

  it('App renders without crashing', () => {
    expect(app.exists()).toBe(true);
  });

  it('App contain Notifications component', () => {
    expect(app.find('Notifications')).toHaveLength(1);
  });

  it('App contain Header component', () => {
    expect(app.find('Header')).toHaveLength(1);
  });

  it('App contain Login component', () => {
    expect(app.find('Login')).toHaveLength(1);
  });

  it('App contain Footer component', () => {
    expect(app.find('Footer')).toHaveLength(1);
  });
  it('CourseList is not displayed', () => {
    expect(app.find('CourseList')).toHaveLength(0);
  });
  it('the default state for displayDrawer is false', () => {
    const displayDrawer = app.props().children[0].props.displayDrawer;
    expect(displayDrawer).toBe(false);
  });
});

describe('<App /> when isLoggedIn is true', () => {
  let app;
  beforeEach(() => {
    app = shallow(<StatelessApp isLoggedIn={ true } />);
  });

  it('Login is not displayed', () => {
    expect(app.find('Login')).toHaveLength(0);
  });
  it('CourseList is displayed', () => {
    expect(app.find('CourseList')).toHaveLength(1);
  });
  it('Verify that markNotificationAsRead works as intended', () => {
    const notifBeforeRemove = app.state('listNotifications');
    app.instance().markNotificationAsRead(1);
    const notifAfterRemove = app.state('listNotifications');

    expect(notifAfterRemove.length).not.toBe(notifBeforeRemove.length);
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
