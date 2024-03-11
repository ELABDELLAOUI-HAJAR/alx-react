/**
 * @jest-environment jsdom
 */

import { StatelessFooter } from './Footer';
import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  let footer;

  beforeEach(() => {
    const user = {
      email: 'hajar@alx.fr',
      password: 'HEA123',
    };
    footer = shallow(<StatelessFooter user={ user } />);
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
    footer = shallow(<StatelessFooter user={ user } />);
    expect(footer.find('a').exists()).toBe(true);
  });
});
