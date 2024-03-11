import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

const boundSelectCourse = (index) => dispatch(selectCourse(index));
const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));

export { selectCourse, unSelectCourse, boundSelectCourse, boundUnSelectCourse };
