/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import util from 'util';
import { StyleSheetTestUtils } from 'aphrodite';

Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});

describe('<NotificationItem />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Renders without crashing', () => {
    shallow(<NotificationItem />);
  });
  it('Dummy type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.html()).toBe('<li data-notification-type="default" class="default_1tsdo2i-o_O-li_oce5e5">test</li>');
  });
  it('Dummy html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toBe(
      '<li data-notification-type="default" class="default_1tsdo2i-o_O-li_oce5e5"><u>test</u></li>'
    );
  });
  it('when simulating a click on the component, the spy is called with the right ID argument', () => {
    const markAsReadMock = jest.fn();
    const id = 5;

    const wrapper = mount(<NotificationItem id={id} markAsRead={markAsReadMock} />);

    wrapper.simulate('click');
    expect(markAsReadMock).toHaveBeenCalledWith(id);
  });
});
