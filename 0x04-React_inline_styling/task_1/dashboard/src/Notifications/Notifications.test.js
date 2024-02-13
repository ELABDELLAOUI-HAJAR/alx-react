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

    it('first NotificationItem renders the right html', () => {
        const notification = shallow(<Notifications displayDrawer={ true } listNotifications={ listNotifications } />);
        const firstNotifItem = notification.find('NotificationItem').first();
        expect(firstNotifItem.html()).toBe('<li data-notification-type="default">New course available</li>');
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

    it('Does not re-render when updating the props of the component with the same list', () => {
        const wrapper = shallow(
            <Notifications displayDrawer={ true } listNotifications={ listNotifications } />
        );
        const instance = wrapper.instance();

        expect(instance.shouldComponentUpdate(listNotifications)).toBe(false);
    });
    it('Render when updating the props of the component with a longer list', () => {
        const wrapper = shallow(
            <Notifications displayDrawer={ true } listNotifications={ listNotifications } />
        );

        const instance = wrapper.instance();

        const newListNotifs = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "default", html: getLatestNotification() },
            { id: 4, type: "default", value: "check update" },
            { id: 5, type: "urgent", value: "last one" },
        ];

        expect(instance.shouldComponentUpdate(newListNotifs)).toBe(true);
    });
});

describe("onClick event should work", () => {
    it("onClick should call the console.log", () => {
        const wrapper = mount(<Notifications />);
        const consoleMock = jest.spyOn(console, "log").mockImplementation(() => { });

        wrapper.instance().markAsRead(3);

        expect(consoleMock).toHaveBeenCalledWith('Notification 3 has been marked as read');

        consoleMock.mockRestore();
        wrapper.unmount();
    });
});
