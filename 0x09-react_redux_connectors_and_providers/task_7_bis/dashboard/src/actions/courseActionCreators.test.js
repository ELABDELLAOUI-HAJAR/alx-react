import { selectCourse, unSelectCourse, setCourses, fetchCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import * as courses from '../../dist/courses.json';

describe('Test courseActionCreators.js', () => {
  it('Test selectCourse', () => {
    const received = selectCourse(1);
    const expected = { type: SELECT_COURSE, index: 1 };

    expect(expected).toEqual(received);
  });
  it('Test unSelectCourse', () => {
    const received = unSelectCourse(1);
    const expected = { type: UNSELECT_COURSE, index: 1 };

    expect(expected).toEqual(received);
  });
  it("Verify that the fetch is working correctly", () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore({});
    fetchMock.restore();

    fetchMock.get("./courses.json", courses.default);

    store.dispatch(fetchCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(setCourses(courses.default));
    });
    fetchMock.restore();
    fetchMock.reset();
  });
});
