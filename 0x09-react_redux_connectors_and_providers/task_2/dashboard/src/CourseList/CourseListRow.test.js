import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<CourseListRow />', () => {
	it('component renders one cell with colspan = 2 when textSecondCell does not exist', () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first' />);
		expect(wrapper.html()).toBe(
			'<tr style="background-color:#deb5b545" class="tr_2q8f5e"><th colSpan="2">first</th></tr>'
		);
	});
	it('component renders two cells when textSecondCell is present', () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first' textSecondCell='second' />);
		expect(wrapper.html()).toBe(
			'<tr style="background-color:#deb5b545" class="tr_2q8f5e"><th class="th_e4x16a">first</th><th class="th_e4x16a">second</th></tr>'
		);
	});
	it('component renders correctly two td elements within a tr element', () => {
		const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='first' textSecondCell='second' />);
		expect(wrapper.html()).toBe(
			'<tr style="background-color:#f5f5f5ab"><td><input type="checkbox"/>first</td><td>second</td></tr>'
		);
	});
});
