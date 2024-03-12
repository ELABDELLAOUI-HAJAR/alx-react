import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';
import coursesNormalizer from '../schema/courses';

const initial_state = Map([]);

const courseReducer = (state = initial_state, action) => {
  switch (action?.type) {
    case FETCH_COURSE_SUCCESS:
      return state.merge(
        coursesNormalizer(
          action.data.map((course) => ({
            ...course,
            isSelected: false,
          }))
        )
      );
    case SELECT_COURSE:
      return state.setIn(['entities', 'courses', action.index, 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['entities', 'courses', action.index, 'isSelected'], false);
    default:
      return state;
  }
};

export default courseReducer;
