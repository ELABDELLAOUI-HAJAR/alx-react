/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import { StatelessCourseList } from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('<CourseList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StatelessCourseList listCourses={listCourses} />);
  });
  afterEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("renders without crashing | renders correctly if you pass an empty array or if you don't pass the listCourses property", () => {
    shallow(<StatelessCourseList />);
  });

  it('renders the 5 different rows', () => {
    const rows = wrapper.find(CourseListRow);

    expect(rows).toHaveLength(5);
  });

  it('fetchCourses is called when the component is mounted', () => {
    const mock = jest.fn();
    shallow(<StatelessCourseList fetchCourses={mock} />);

    expect(mock).toHaveBeenCalled();
  });
});
