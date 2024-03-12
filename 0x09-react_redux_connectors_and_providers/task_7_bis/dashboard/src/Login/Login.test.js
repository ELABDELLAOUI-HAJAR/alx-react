/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
	it('Login renders without crashing', () => {
		shallow(<Login />);
	});

	it('Login renders 3 input tags and 2 label tags', () => {
		const login = shallow(<Login />);

		const inputs = login.find('input');
		const labels = login.find('label');

		expect(inputs).toHaveLength(3);
		expect(labels).toHaveLength(2);
	});

	it('verify that the submit button is disabled by default', () => {
		const wrapper = shallow(<Login />);
		const submitButton = wrapper.find('input[type="submit"]');
		expect(submitButton.prop('disabled')).toBe(true);
	});

	it('verify that after changing the value of the two inputs, the button is enabled', () => {
		const wrapper = mount(<Login />);
		const emailInput = wrapper.find('input[type="email"]');
		const passwordInput = wrapper.find('input[type="password"]');

		emailInput.simulate('change', { target: { value: 'email@alx.com' } });
		passwordInput.simulate('change', { target: { value: '123456' } });

		const submitButton = wrapper.find('input[type="submit"]');
		expect(submitButton.prop('disabled')).toBe(false);
	});
});
