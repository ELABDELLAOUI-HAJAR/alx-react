import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

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
});

describe('<App /> when isLoggedIn is True', () => {
  it('CourseList is included', () => {
    const app = shallow(<App isLoggedIn={ true } />);
    expect(app.find('CourseList')).toHaveLength(1);
  });
  it('Login is not included', () => {
    const app = shallow(<App isLoggedIn={ true } />);
    expect(app.find('Login')).toHaveLength(0);
  });
});
