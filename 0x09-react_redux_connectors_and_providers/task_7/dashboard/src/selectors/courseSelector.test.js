import { fromJS } from 'immutable';
import { getListCourses } from './courseSelector';

describe('Tests for Course selectors', () => {
  it('Verify that the selector is working correctly', () => {
    const state = {
      courses: fromJS([
        { id: 1, name: "ES6", isSelected: false, credit: 60, },
        { id: 2, name: "Webpack", isSelected: false, credit: 20, },
        { id: 3, name: "React", isSelected: false, credit: 40, },
      ]),
    };

    const expectedResult = [
      { id: 1, name: "ES6", isSelected: false, credit: 60, },
      { id: 2, name: "Webpack", isSelected: false, credit: 20, },
      { id: 3, name: "React", isSelected: false, credit: 40, },
    ];

    expect(getListCourses(state).toJS()).toEqual(expectedResult);
  });
});
