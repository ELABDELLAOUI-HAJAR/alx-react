import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it('CourseListRow renders one cell with colspan = 2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={ true } textFirstCell='firstCell' />);
        expect(wrapper.html()).toBe('<tr><th colSpan="2">firstCell</th></tr>');
    });
    it('CourseListRow renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={ true } textFirstCell='firstCell' textSecondCell='secondCell' />);
        expect(wrapper.html()).toBe('<tr><th>firstCell</th><th>secondCell</th></tr>');
    });
    it('CourseListRow renders correctly two td elements within a tr element when !isHeader', () => {
        const wrapper = shallow(<CourseListRow isHeader={ false } textFirstCell='firstCell' textSecondCell='secondCell' />);
        expect(wrapper.html()).toBe('<tr><td>firstCell</td><td>secondCell</td></tr>');
    });
});
