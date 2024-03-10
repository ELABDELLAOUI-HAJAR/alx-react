/**
 * @jest-environment jsdom
 */
import { StatelessHeader } from './Header';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();


describe('<Header /', () => {
  let header;

  beforeEach(() => {
    const user = {
      email: '',
      password: '',
    };

    header = mount(<StatelessHeader user={ user } />);
  });

  afterEach(() => {
    header.unmount();
  });

  it('Header renders without crashing', () => {
    expect(header.exists()).toBe(true);
  });

  it('Header render img & h1 tags', () => {
    expect(header.find('img')).toHaveLength(1);
    expect(header.find('h1')).toHaveLength(1);
  });

  it('Verify that the logoutSection is not created', () => {
    const logoutSection = header.find('#logoutSection');
    expect(logoutSection.exists()).toBe(false);
  });

  it('Verify that the logoutSection is created', () => {
    const user = {
      email: 'test@hajar.alx',
      password: 'test123',
      isLoggedIn: true,
    };

    const header = shallow(<StatelessHeader user={ user } />);

    const logoutSection = header.find('#logoutSection');
    expect(logoutSection.exists()).toBe(true);
  });
});
