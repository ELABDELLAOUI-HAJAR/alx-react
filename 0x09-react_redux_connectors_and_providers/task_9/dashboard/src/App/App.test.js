/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import { StatelessApp, mapStateToProps } from './App';
import NotificationsContainer from '../Notifications/NotificationsContainer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
  let app;
  beforeEach(() => {
    app = shallow(<StatelessApp displayDrawer={false} />);
  });
  it('App renders without crashing', () => {
    expect(app.exists()).toBe(true);
  });
  it('App contain NotificationsContainer component', () => {
    const component = app.find(NotificationsContainer);
    expect(component).toHaveLength(1);
  });
  it('App contain Header component', () => {
    const component = app.find(Header);
    expect(component).toHaveLength(1);
  });
  it('App contain Login component', () => {
    const component = app.find(Login);
    expect(component).toHaveLength(1);
  });
  it('App contain Footer component', () => {
    const component = app.find(Footer);
    expect(component).toHaveLength(1);
  });
  it('CourseList is not displayed', () => {
    const component = app.find(CourseList);
    expect(component).toHaveLength(0);
  });
});

describe('<App /> isLoggedIn true:', () => {
  let app;
  beforeEach(() => {
    app = shallow(<StatelessApp isLoggedIn={true} />);
  });
  it('Login is not displayed', () => {
    const component = app.find(Login);
    expect(component).toHaveLength(0);
  });
  it('CourseList is displayed', () => {
    const component = app.find(CourseList);
    expect(component).toHaveLength(1);
  });
});

describe('Test mapStateToProps ', () => {
  it('verify that the function returns the right object', () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
      }),
    };
    expect(mapStateToProps(state)).toEqual({
      isLoggedIn: true,
    });
  });
});
