import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();


describe('<BodySection />', () => {
    it('should render correctly the children', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        );

        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('h2').text()).toContain('test title');

        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toContain('test children node');

    });
});