import Login from './Login';
import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
    it('Login render without crashing', () => {
        const login = shallow(<Login />);
        expect(login.exists()).toBe(true);
    });
    it('Login render 2 inputs & 2 labels', () => {
        const login = shallow(<Login />);
        expect(login.find('input')).toHaveLength(2);
        expect(login.find('label')).toHaveLength(2);
    });
});
