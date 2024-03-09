/**
 * @jest-environment jsdom
 */

import Footer from './Footer';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
    let footer;

    beforeEach(() => {
        footer = mount(
            <AppContext.Provider value={ { user: {} } }>
                <Footer />
            </AppContext.Provider>
        );
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
        const footer = mount(
            <AppContext.Provider value={ { user: { isLoggedIn: true } } }>
                <Footer />
            </AppContext.Provider>
        );
        expect(footer.find('a').exists()).toBe(true);
    });
});
