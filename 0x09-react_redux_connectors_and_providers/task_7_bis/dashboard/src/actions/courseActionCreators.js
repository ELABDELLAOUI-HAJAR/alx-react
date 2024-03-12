import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';
import fetch from 'node-fetch';

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

function setCourses(data) {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
}

const fetchCourses = () => (dispatch) => {
  const baseURL = 'http://localhost:8080';
  return fetch(new URL('/courses.json', baseURL))
    .then((res) => res.json())
    .then((data) => dispatch(setCourses(data)))
    .catch((error) => { });
};

export {
  selectCourse, unSelectCourse,
  boundSelectCourse, boundUnSelectCourse,
  setCourses, fetchCourses
};
