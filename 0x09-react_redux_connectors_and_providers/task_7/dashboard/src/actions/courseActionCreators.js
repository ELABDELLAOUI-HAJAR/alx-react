import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
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

function setCourses(data) {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
}

const boundSelectCourse = (index) => (dispatch) => dispatch(selectCourse(index));
const boundUnSelectCourse = (index) => (dispatch) => dispatch(unSelectCourse(index));

const fetchCourses = () => (dispatch) => {
  const baseURL = 'http://localhost:8080';
  return fetch(new URL('/courses.json', baseURL))
    .then((res) => res.json())
    .then((data) => dispatch(setCourses(data)));
};

export { selectCourse, unSelectCourse, boundSelectCourse, boundUnSelectCourse, fetchCourses };
