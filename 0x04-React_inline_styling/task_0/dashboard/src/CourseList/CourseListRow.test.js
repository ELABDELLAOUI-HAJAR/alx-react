import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it('CourseListRow renders one cell with colspan = 2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={ true } textFirstCell='firstCell' />);
        expect(wrapper.html()).toBe('<tr style="background-color:#deb5b545"><th colSpan="2">firstCell</th></tr>');
    });
    it('CourseListRow renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={ true } textFirstCell='firstCell' textSecondCell='secondCell' />);
        expect(wrapper.html()).toBe('<tr style="background-color:#deb5b545"><th>firstCell</th><th>secondCell</th></tr>');
    });
    it('CourseListRow renders correctly two td elements within a tr element when !isHeader', () => {
        const wrapper = shallow(<CourseListRow isHeader={ false } textFirstCell='firstCell' textSecondCell='secondCell' />);
        expect(wrapper.html()).toBe('<tr style="background-color:#f5f5f5ab"><td>firstCell</td><td>secondCell</td></tr>');
    });
});
