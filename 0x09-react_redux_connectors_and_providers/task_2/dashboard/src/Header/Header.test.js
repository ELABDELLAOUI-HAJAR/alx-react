/**
 * @jest-environment jsdom
 */
import Header from './Header';
import { mount } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();


describe('<Header /', () => {
    let header;

    beforeEach(() => {
        const user = {
            email: '',
            password: '',
            isLoggedIn: false,
        };
        const logOut = () => { };

        header = mount(
            <AppContext.Provider value={ { user, logOut } }>
                <Header />
            </AppContext.Provider>
        );
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
        const logOut = () => { };
        const user = {
            email: 'test@hajar.alx',
            password: 'test123',
            isLoggedIn: true,
        };

        const header = mount(
            <AppContext.Provider value={ { user, logOut } }>
                <Header />
            </AppContext.Provider>
        );

        const logoutSection = header.find('#logoutSection');
        expect(logoutSection.exists()).toBe(true);
    });

    it('Test calling logOut', () => {
        const logOutMock = jest.fn();
        const logOut = logOutMock;

        const user = {
            email: 'test@hajar.alx',
            password: 'test123',
            isLoggedIn: true,
        };


        const header = mount(
            <AppContext.Provider value={ { user, logOut } }>
                <Header />
            </AppContext.Provider>
        );

        header.find('a#logOut').simulate('click');

        expect(logOutMock).toHaveBeenCalled();
        logOutMock.mockRestore();
    });
});
