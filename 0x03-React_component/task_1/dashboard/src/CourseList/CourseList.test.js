import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';

describe('<CourseList />', () => {
    const listCourses = [
        { id: 1, name: "Java", credit: 60 },
        { id: 2, name: "PLSQL", credit: 20 },
        { id: 3, name: "React", credit: 40 },
    ];

    it('CourseList renders without crashing', () => {
        const courseList = shallow(<CourseList />);
        expect(courseList.exists()).toBe(true);
    });

    it('CourseList renders 5 different rows', () => {
        const courseList = shallow(<CourseList listCourses={ listCourses } />);
        expect(courseList.find('CourseListRow')).toHaveLength(5);
    });

    it('CourseList renders correctly when listCourses is not passed or empty', () => {
        const wrapperWithoutList = shallow(<CourseList />);
        const wrapperWithEmptyList = shallow(<CourseList listCourses={ [] } />);
        expect(wrapperWithoutList.exists()).toBe(true);
        expect(wrapperWithEmptyList.exists()).toBe(true);
    });

    it('CourseList renders correctly when listCourses is passed', () => {
        const wrapper = shallow(<CourseList listCourses={ listCourses } />);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
});
