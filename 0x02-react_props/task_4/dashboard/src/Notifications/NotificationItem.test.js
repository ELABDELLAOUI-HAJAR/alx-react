import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
    it('NotificationItem render without crashing', () => {
        const notifItem = shallow(<NotificationItem />);
        expect(notifItem.exists()).toBe(true);
    });
    it('NotificationItem renders the correct html by passing type and value', () => {
        const notifItem = shallow(<NotificationItem type="default" value="test" />);
        const li = notifItem.find('li');
        expect(li.prop('data-notification-type')).toBe('default');
        expect(li.text()).toBe('test');
    });
    it('NotificationItem renders the correct html by passing html', () => {
        const notifItem = shallow(<NotificationItem html="<u>test</u>" />);
        const li = notifItem.find('li');
        expect(li.prop('dangerouslySetInnerHTML')).toEqual({ "__html": "<u>test</u>" });
    });
});
