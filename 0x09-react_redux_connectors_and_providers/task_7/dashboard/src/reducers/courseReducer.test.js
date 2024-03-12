import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import courseReducer from './courseReducer';
import { fromJS } from 'immutable';
import coursesNormalizer from '../schema/courses';

describe('Test courseReducer', () => {
  it('Test that the default state returns an empty array', () => {
    expect(courseReducer().toJS()).toEqual([]);
  });
  it('Test that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };

    const received_state = courseReducer(fromJS([]), action);
    const expectedState = fromJS([]).merge(
      coursesNormalizer(
        action.data.map((course) => ({
          ...course,
          isSelected: false,
        }))
      )
    );

    expect(expectedState.toJS()).toEqual(received_state.toJS());
  });
  it('Test that SELECT_COURSE returns the data with the right item updated', () => {
    const initial_state = fromJS(
      coursesNormalizer([
        { id: 1, name: 'ES6', credit: 60, isSelected: false },
        { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        { id: 3, name: 'React', credit: 40, isSelected: false },
      ])
    );
    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const received_state = courseReducer(initial_state, action);
    const expected_state = initial_state.setIn(['entities', 'courses', action.index, 'isSelected'], true);

    expect(received_state.toJS()).toEqual(expected_state.toJS());
  });
  it('Test that UNSELECT_COURSE returns the data with the right item updated', () => {
    const initial_state = fromJS(
      coursesNormalizer([
        { id: 1, name: 'ES6', credit: 60, isSelected: false },
        { id: 2, name: 'Webpack', credit: 20, isSelected: true },
        { id: 3, name: 'React', credit: 40, isSelected: false },
      ])
    );
    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const received_state = courseReducer(initial_state, action);
    const expected_state = initial_state.setIn(['entities', 'courses', action.index, 'isSelected'], false);

    expect(received_state.toJS()).toEqual(expected_state.toJS());
  });
});
