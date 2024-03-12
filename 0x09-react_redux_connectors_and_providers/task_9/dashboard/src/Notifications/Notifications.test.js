/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import util from 'util';
import { StyleSheetTestUtils } from 'aphrodite';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});

const listNotifications = [
  { guid: 0, type: 'default', value: 'New course available' },
  { guid: 1, type: 'urgent', value: 'New resume available' },
  { guid: 2, type: 'urgent', html: { __html: getLatestNotification() } },
];

describe('<Notifications />', () => {
  let notifications;

  beforeEach(() => {
    notifications = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.exists()).toBe(true);
  });
  it('renders three list items', () => {
    const list = notifications.find(NotificationItem);
    expect(list.length).toBe(3);
  });
  it('renders the text Here is the list of notifications', () => {
    const text = notifications.text();
    const hasText = text.includes('Here is the list of notifications');
    expect(hasText).toBe(true);
  });
  it('first NotificationItem element renders the right html', () => {
    const first = notifications.find(NotificationItem).first();
    expect(first.html()).toBe(
      '<li data-notification-type="default" class="default_1tsdo2i-o_O-li_oce5e5">New course available</li>'
    );
  });
  it('menu item is being displayed when displayDrawer is false', () => {
    const notifications = shallow(<Notifications />);
    const menuItem = notifications.find('div.menuItem');
    expect(menuItem.exists()).toBe(true);
  });
  it('menu item is being displayed when displayDrawer is true', () => {
    const menuItem = notifications.find('div.menuItem');
    expect(menuItem.exists()).toBe(false);
  });
  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    const notifications = shallow(<Notifications displayDrawer={false} />);
    const notifDiv = notifications.find('div.Notifications');
    expect(notifDiv.exists()).toBe(false);
  });
  it('div.Notifications is being displayed when displayDrawer is true', () => {
    const notifDiv = notifications.find('div.Notifications');
    expect(notifDiv.exists()).toBe(true);
  });

  it('Renders correctly when listNotifications is not passed or empty', () => {
    shallow(<Notifications />);
    shallow(<Notifications listNotifications={[]} />);
  });

  it('Renders correctly a listNotifications with the right number of NotificationItem', () => {
    const list = notifications.find(NotificationItem);
    expect(list.length).toBe(3);
  });
  it('when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
    const notifications = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    const text = notifications.text();

    expect(text.includes('Here is the list of notifications')).toBe(false);
    expect(text.includes('No new notification for now')).toBe(true);
  });

  it('clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawerMock = jest.fn();

    const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawerMock} />);
    const menuItem = wrapper.find('div.menuItem');
    menuItem.simulate('click');

    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });
  it('clicking on the button calls handleHideDrawer', () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawerMock} />);
    const closeBtn = wrapper.find('button');
    closeBtn.simulate('click');

    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
  it('first button should call setNotificationFilter with URGENT', () => {
    const urgentMock = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} setNotificationFilter={urgentMock} listNotifications={listNotifications} />
    );

    wrapper.find('#urgent').simulate('click');
    expect(urgentMock).toHaveBeenCalledWith(NotificationTypeFilters.URGENT);
  });
  it('second button should call setNotificationFilter with DEFAULT', () => {
    const defaultMock = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} setNotificationFilter={defaultMock} listNotifications={listNotifications} />
    );

    wrapper.find('#default').simulate('click');
    expect(defaultMock).toHaveBeenCalledWith(NotificationTypeFilters.DEFAULT);
  });
});
