/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('WithLoggin HOC', () => {
	it('console.log was called on mount and on unmount with Component when the wrapped element is pure html', () => {
		const logMock = jest.spyOn(window.console, 'log').mockImplementation(() => {});

		const WrapperComp = WithLogging(() => <p>Test</p>);
		const comp = mount(<WrapperComp />);
		expect(logMock).toBeCalled();

		comp.unmount();
		expect(logMock).toBeCalled();

		logMock.mockRestore();
	});

	it('console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component', () => {
		const logMock = jest.spyOn(window.console, 'log').mockImplementation();

		const LoginWithLogging = WithLogging(Login);
		const loginComp = mount(<LoginWithLogging />);

		expect(logMock).toBeCalledWith('Component Login is mounted');

		loginComp.unmount();
		expect(logMock).toBeCalledWith('Component Login is going to unmount');

		logMock.mockRestore();
	});
});
