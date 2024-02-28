/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();


describe('Tests for Notifications component', () => {
    const listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() }, },
    ];

    it('renders Notification component without crashing', () => {
        const notification = shallow(<Notifications />);
        expect(notification).toBeDefined();
    });

    it('renders ul', () => {
        const notification = shallow(<Notifications displayDrawer={ true } />);
        expect(notification.find('ul')).toBeDefined();
    });

    it('renders three NotificationItem', () => {
        const notification = shallow(<Notifications displayDrawer={ true } listNotifications={ listNotifications } />);
        expect(notification.find('NotificationItem')).toHaveLength(3);
    });

    it('renders correct text', () => {
        const notification = shallow(<Notifications displayDrawer={ true } listNotifications={ listNotifications } />);
        expect(notification.find('p').text()).toBe(
            'Here is the list of notifications'
        );
    });

    it('first NotificationItem renders the right text', () => {
        const notification = shallow(<Notifications displayDrawer={ true } listNotifications={ listNotifications } />);
        const firstNotifItem = notification.find('NotificationItem').first();
        expect(firstNotifItem.html()).toContain('New course available');
    });

    it('menu item is displayed when displayDrawer is false', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find('.menuItem')).toHaveLength(1);
    });

    it('div.Notifications is displayed when displayDrawer is false', () => {
        const notification = shallow(<Notifications />);
        expect(notification.find('div.Notifications')).toHaveLength(0);
    });

    it('menu item is displayed when displayDrawer is true', () => {
        const notification = shallow(<Notifications displayDrawer={ true } />);
        expect(notification.find('.menuItem')).toHaveLength(1);
    });

    it('div.Notifications is displayed when displayDrawer is true', () => {
        const notification = shallow(<Notifications displayDrawer={ true } />);
        expect(notification.find('div.Notifications')).toHaveLength(1);
    });

    it('Notifications renders correctly when listNotifications is not passed or empty', () => {
        const wrapperWithoutList = shallow(<Notifications />);
        const wrapperWithEmptyList = shallow(<Notifications listNotifications={ [] } />);
        expect(wrapperWithoutList.exists()).toBe(true);
        expect(wrapperWithEmptyList.exists()).toBe(true);
    });

    it('Notifications renders correctly when listNotifications is passed', () => {
        const wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ listNotifications } />);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });

    it('Check that the correct message is displayed when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ [] } />);
        const itemText = wrapper.text();

        expect(itemText.includes('Here is the list of notifications')).toBe(false);
        expect(itemText.includes('No new notification for now')).toBe(true);
    });

    it('Check that clicking on the menuItem calls handleDisplayDrawer', () => {
        const handleDisplayDrawerMock = jest.fn();
        const handleHideDrawerMock = jest.fn();

        const wrapper = shallow(<Notifications
            displayDrawer={ true }
            handleDisplayDrawer={ handleDisplayDrawerMock }
            handleHideDrawer={ handleHideDrawerMock }
        />);
        const menuItem = wrapper.find('.menuItem');
        menuItem.simulate('click');

        expect(handleDisplayDrawerMock).toHaveBeenCalled();
        expect(handleHideDrawerMock).not.toHaveBeenCalled();

        jest.restoreAllMocks();
    });

    it('Check that clicking on the close button calls handleHideDrawer', () => {
        const handleDisplayDrawerMock = jest.fn();
        const handleHideDrawerMock = jest.fn();


        const wrapper = shallow(<Notifications
            displayDrawer={ true }
            handleDisplayDrawer={ handleDisplayDrawerMock }
            handleHideDrawer={ handleHideDrawerMock } />);
        const closeButton = wrapper.find('button');
        closeButton.simulate('click');

        expect(handleHideDrawerMock).toHaveBeenCalled();
        expect(handleDisplayDrawerMock).not.toHaveBeenCalled();

        jest.restoreAllMocks();
    });
});
