/**
 * @jest-environment jsdom
 */

import { StatelessFooter } from './Footer';
import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  let footer;

  beforeEach(() => {
    const user = {
      email: 'hajar@alx.fr',
      password: 'HEA123',
    };
    footer = mount(<StatelessFooter user={ user } />);
  });

  afterEach(() => {
    footer.unmount();
  });

  it('Footer render without crashing', () => {
    expect(footer.exists()).toBe(true);
  });
  it('Footer at the very least render the text "Copyright"', () => {
    expect(footer.text()).toContain('Copyright');
  });
  it('Verify that the link is not displayed when the user is logged out within the context', () => {
    expect(footer.find('a').exists()).toBe(false);
  });
  it('Verify that the link is displayed when the user is logged in within the context', () => {
    const user = {
      email: 'hajar@alx.fr',
      password: 'HEA123',
      isLoggedIn: true,
    };
    footer = mount(<StatelessFooter user={ user } />);
    expect(footer.find('a').exists()).toBe(true);
  });
});
