import { selectCourse, unSelectCourse } from "../actions/courseActionCreators";
import { FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { coursesNormalizer } from "../schema/courses";
import { courseReducer, initialState } from "./courseReducer";
import { fromJS } from 'immutable';


describe('Tests for courseReducer', () => {
  it('Test that the default state returns an empty array', () => {
    expect(courseReducer().toJS()).toStrictEqual(initialState.toJS());
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

    const expectedState = [{
      "1": { "credit": 60, "id": 1, "isSelected": false, "name": "ES6" },
      "2": { "credit": 20, "id": 2, "isSelected": false, "name": "Webpack" },
      "3": { "credit": 40, "id": 3, "isSelected": false, "name": "React" }
    }];

    const response = courseReducer(initialState, fetchCourseAction);

    expect(response.toJS()).toStrictEqual(expectedState);

  });

  it('Test that SELECT_COURSE returns the data with the right item updated', () => {
    const initState = fromJS(
      coursesNormalizer([
        { id: 1, name: 'ES6', isSelected: false, credit: 60 },
        { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
        { id: 3, name: 'React', isSelected: false, credit: 40 },
      ])
    );

    const expectedState = initState.setIn(['entities', 'courses', 1, 'isSelected'], true);

    const response = courseReducer(initState, selectCourse(1));

    expect(response.toJS()).toStrictEqual(expectedState.toJS());
  });

  it('Test that UNSELECT_COURSE returns the data with the right item updated', () => {
    const initState = fromJS(
      coursesNormalizer([
        { id: 1, name: 'ES6', isSelected: false, credit: 60 },
        { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
        { id: 3, name: 'React', isSelected: true, credit: 40 },
      ])
    );

    const expectedState = initState.setIn(['entities', 'courses', 2, 'isSelected'], false);

    const response = courseReducer(initState, unSelectCourse(2));

    expect(response.toJS()).toStrictEqual(expectedState.toJS());
  });
});
