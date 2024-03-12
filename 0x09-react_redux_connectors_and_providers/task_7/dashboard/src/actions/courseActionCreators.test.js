import { selectCourse, unSelectCourse, fetchCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import * as courses from '../../dist/courses.json';

const mockStore = configureStore([thunk]);

describe('Test courseActionCreators.js', () => {
  test('Test selectCourse', () => {
    const received = selectCourse(1);
    const expected = { type: SELECT_COURSE, index: 1 };

    expect(expected).toEqual(received);
  });
  test('Test unSelectCourse', () => {
    const received = unSelectCourse(1);
    const expected = { type: UNSELECT_COURSE, index: 1 };

    expect(expected).toEqual(received);
  });

  test('Test fetchCourses', () => {
    const expectedAction = {
      type: 'FETCH_COURSE_SUCCESS',
      data: courses.default,
    };
    const store = mockStore();
    fetchMock.mock('/courses.json', 200);

    store.dispatch(fetchCourses()).then(() => {
      const receivedAction = store.getActions()[0];
      expect(receivedAction).toEqual(expectedAction);
    });

    fetchMock.restore();
    fetchMock.reset();
  });
});
