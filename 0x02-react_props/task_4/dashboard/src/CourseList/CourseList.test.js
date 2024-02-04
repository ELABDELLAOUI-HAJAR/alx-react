import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';

describe('<CourseList />', () => {
    it('CourseList renders without crashing', () => {
        const courseList = shallow(<CourseList />);
        expect(courseList.exists()).toBe(true);
    });

    it('CourseList renders 5 different rows', () => {
        const courseList = shallow(<CourseList />);
        expect(courseList.find('CourseListRow')).toHaveLength(5);
    });
});
