import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<BodySection />', () => {
	it('Renders the correct children', () => {
		const wrapper = shallow(
			<BodySection title='test title'>
				<p>test children node</p>
			</BodySection>
		);

		const h = wrapper.find('h2');
		const p = wrapper.find('p');

		expect(h).toHaveLength(1);
		expect(p).toHaveLength(1);

		expect(h.text()).toContain('test title');
		expect(p.text()).toContain('test children node');
	});
});
