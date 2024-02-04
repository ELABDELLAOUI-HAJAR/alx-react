import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';


describe('<Header /', () => {
    it('Header renders without crashing', () => {
        const header = shallow(<Header />);
        expect(header.exists()).toBe(true);
    });
    it('Header render img & h1 tags', () => {
        const header = shallow(<Header />);
        expect(header.find('img')).toHaveLength(1);
        expect(header.find('h1')).toHaveLength(1);
    });
});
