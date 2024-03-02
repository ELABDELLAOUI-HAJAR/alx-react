import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<CourseListRow />', () => {
    it('CourseListRow renders one cell with colspan = 2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={ true } textFirstCell='firstCell' />);
        expect(wrapper.html()).toBe(
            '<tr style="background-color:#deb5b545" class="tr_1gfmy4m"><th colSpan="2" class="center_th_12to336">firstCell</th></tr>');
    });
    it('CourseListRow renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={ true } textFirstCell='firstCell' textSecondCell='secondCell' />);
        expect(wrapper.html()).toBe(
            '<tr style="background-color:#deb5b545" class="tr_1gfmy4m"><th class="th_e4x16a">firstCell</th><th class="th_e4x16a">secondCell</th></tr>');
    });
    it('CourseListRow renders correctly two td elements within a tr element when !isHeader', () => {
        const wrapper = shallow(<CourseListRow isHeader={ false } textFirstCell='firstCell' textSecondCell='secondCell' />);
        expect(wrapper.html()).toBe('<tr style="background-color:#f5f5f5ab"><td><input type="checkbox"/>firstCell</td><td>secondCell</td></tr>');
    });
});
