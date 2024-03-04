import * as courseActions from '../actions/courseActionTypes';
import { fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

export const initialState = fromJS([]);

export function courseReducer(state = initialState, action = { type: null }) {
  switch (action.type) {
    case courseActions.FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      Object.keys(normalizedData).map((key) => {
        normalizedData[key].isSelected = false;
      });
      return state.merge(normalizedData);

    case courseActions.SELECT_COURSE:
      return state.setIn(['entities', 'courses', action.index, 'isSelected'], true);

    case courseActions.UNSELECT_COURSE:
      return state.setIn(['entities', 'courses', action.index, 'isSelected'], false);

    default:
      return state;
  }
}
