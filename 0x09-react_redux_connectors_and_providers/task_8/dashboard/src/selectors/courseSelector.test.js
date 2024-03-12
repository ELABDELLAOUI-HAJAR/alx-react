import { getCourseEntities } from './courseSelector';
import courseReducer from '../reducers/courseReducer';
import { FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';

describe('Test courseSelector', () => {
  let courses;
  beforeAll(() => {
    courses = [
      { id: '1', name: 'ES6', credit: 60 },
      { id: '2', name: 'Webpack', credit: 20 },
      { id: '3', name: 'React', credit: 40 },
    ];
  });

  it('Test getCourseEntities Selector', () => {
    const state = courseReducer(Map([]), {
      type: FETCH_COURSE_SUCCESS,
      data: courses,
    });

    const expected = [
      {
        courses: {
          1: { id: '1', name: 'ES6', credit: 60, isSelected: false },
          2: { id: '2', name: 'Webpack', credit: 20, isSelected: false },
          3: { id: '3', name: 'React', credit: 40, isSelected: false },
        },
      },
      ['1', '2', '3'],
    ];
    expect(getCourseEntities(state).toJS()).toEqual(expected);
  });
});
