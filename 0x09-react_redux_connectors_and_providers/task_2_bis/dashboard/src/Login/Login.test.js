/**
 * @jest-environment jsdom
 */

import Login from './Login';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
    it('Login render without crashing', () => {
        const login = shallow(<Login />);
        expect(login.exists()).toBe(true);
    });
    it('Login render 3 inputs & 2 labels', () => {
        const login = shallow(<Login />);
        expect(login.find('input')).toHaveLength(3);
        expect(login.find('label')).toHaveLength(2);
    });
    it('verify that the submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').at(2).prop('disabled')).toBe(true);
    });
    it('verify that after changing the value of the two inputs, the button is enabled', () => {
        const wrapper = mount(<Login />);
        const email = wrapper.find('input[type="text"]');
        const password = wrapper.find('input[type="password"]');

        email.simulate('change', { target: { value: 'test@test.ma' } });
        password.simulate('change', { target: { value: 'test123' } });

        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
        wrapper.unmount();
    });
});
