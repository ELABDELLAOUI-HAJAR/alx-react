import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

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
});
