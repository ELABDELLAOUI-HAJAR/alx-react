/**
 * @jest-environment jsdom
 */
import React from 'react';
import { StatelessFooter } from './Footer';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  let footer;
  beforeEach(() => {
    const user = {
      email: 'yassine@alx',
      password: '123456',
    };
    footer = shallow(<StatelessFooter user={user} />);
  });
  it('Footer renders without crashing', () => {
    expect(footer.exists()).toBe(true);
  });
  it('Footer at the very least render the text “Copyright”', () => {
    const text = footer.text();
    expect(text).toContain('Copyright');
  });
  it('verify that the link is not displayed when the user is logged out within the context', () => {
    const user = null;
    const footer = shallow(<StatelessFooter user={user} />);

    const link = footer.find('a');
    expect(link.exists()).toBe(false);
  });
  it('verify that the link is displayed when the user is logged in within the context', () => {
    const link = footer.find('a');
    expect(link.exists()).toBe(true);
  });
});
