import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<BodySectionWithMarginBottom />', () => {
    it('Should render correctly a BodySection component and the props are passed correctly to the child component', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title='test title'>
                <p>test children node</p>
            </BodySectionWithMarginBottom>);

        const bodySectionWrapper = wrapper.find('BodySection');

        expect(bodySectionWrapper.exists()).toBe(true);
        expect(bodySectionWrapper.prop('title')).toBe('test title');
        expect(bodySectionWrapper.find('p').exists()).toBe(true);
        expect(bodySectionWrapper.find('p').text()).toBe('test children node');
    });
});
