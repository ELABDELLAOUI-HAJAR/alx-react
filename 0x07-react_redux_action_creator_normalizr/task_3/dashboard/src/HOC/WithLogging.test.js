/**
 * @jest-environment jsdom
 */

import React from 'react';
import WithLogging from './WithLogging';
import { mount } from 'enzyme';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<WithLogging />', () => {
    it('should make sure console.log was called on mount and on unmount with Component', () => {
        const consoleLogMock = jest.spyOn(window.console, 'log').mockImplementation(() => { });

        const WrappedComponent = WithLogging(() => <p>Test WithLogging</p>);

        const component = mount(<WrappedComponent />);
        expect(consoleLogMock).toBeCalled();

        component.unmount();
        expect(consoleLogMock).toBeCalled();

        consoleLogMock.mockRestore();
    });
    it('console.log should be called on mount and on unmount with the name of the component when the wrapped element is the Login component', () => {
        const ConsoleLogMock = jest.spyOn(window.console, 'log').mockImplementation();

        const LoginWithLogging = WithLogging(Login);
        const loginComponent = mount(<LoginWithLogging />);

        expect(ConsoleLogMock).toBeCalledWith('Component Login is mounted');

        loginComponent.unmount();
        expect(ConsoleLogMock).toBeCalledWith('Component Login is going to unmount');

        ConsoleLogMock.mockRestore();
    });
});
