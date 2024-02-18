/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

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
        expect(li.prop('dangerouslySetInnerHTML')).toEqual("<u>test</u>");
    });
});

describe("onClick event should work", () => {
    it("onClick should call the console.log", () => {
        const mockFunc = jest.fn();
        const wrapper = mount(<NotificationItem value="OnClick test" markAsRead={ mockFunc } id={ 5 } />);

        wrapper.simulate('click');
        expect(mockFunc).toBeCalledWith(5);
        mockFunc.mockRestore();
    });
});
