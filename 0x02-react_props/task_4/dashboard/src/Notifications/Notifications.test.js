import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('Tests for Notifications component', () => {
    it('renders Notification component without crashing', () => {
        const notification = shallow(<Notifications />);
        expect(notification).toBeDefined();
    });

    it('renders ul', () => {
        const notification = shallow(<Notifications displayDrawer={ true } />);
        expect(notification.find('ul')).toBeDefined();
    });

    it('renders three NotificationItem', () => {
        const notification = shallow(<Notifications displayDrawer={ true } />);
        expect(notification.find('NotificationItem')).toHaveLength(3);
    });

    it('renders correct text', () => {
        const notification = shallow(<Notifications displayDrawer={ true } />);
        expect(notification.find('p').text()).toBe(
            'Here is the list of notifications'
        );
    });

    it('first NotificationItem renders the right html', () => {
        const notification = shallow(<Notifications displayDrawer={ true } />);
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
});
