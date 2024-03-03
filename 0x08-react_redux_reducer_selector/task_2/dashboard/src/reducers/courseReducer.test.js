import { selectCourse, unSelectCourse } from "../actions/courseActionCreators";
import { FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { courseReducer } from "./courseReducer";


describe('Tests for courseReducer', () => {
  it('Test that the default state returns an empty array', () => {
    expect(courseReducer()).toStrictEqual([]);
  });

  it('Test that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const data = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ];

    const fetchCourseAction = {
      type: FETCH_COURSE_SUCCESS,
      data: data,
    };

    const expectedState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];

    const response = courseReducer(undefined, fetchCourseAction);

    expect(response).toStrictEqual(expectedState);

  });

  it('Test that SELECT_COURSE returns the data with the right item updated', () => {
    const initState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];

    const expectedState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];

    const response = courseReducer(initState, selectCourse(2));

    expect(response).toStrictEqual(expectedState);
  });

  it('Test that UNSELECT_COURSE returns the data with the right item updated', () => {
    const initState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: true, credit: 40 }
    ];

    const expectedState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: true, credit: 40 }
    ];

    const response = courseReducer(initState, unSelectCourse(2));

    expect(response).toStrictEqual(expectedState);
  });
});
