import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<BodySectionWithMarginBottom />', () => {
	it('<Render correctly a BodySection component with right props', () => {
		const wrapper = shallow(
			<BodySectionWithMarginBottom title='test title'>
				<p>test children node</p>
			</BodySectionWithMarginBottom>
		);

		const bodySection = wrapper.find(BodySection);
		expect(bodySection.exists()).toBe(true);

		expect(wrapper.find(BodySection).prop('title')).toBe('test title');
		expect(bodySection.find('p').text()).toBe('test children node');
	});
});
