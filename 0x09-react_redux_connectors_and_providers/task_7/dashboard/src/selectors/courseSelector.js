export const getCourseEntities = (state) => {
  return state.valueSeq();
};

export const getListCourses = (state) => {
  let courses = [];

  if (getCourseEntities(state).toJS()[0]) {
    courses = Object.values(getCourseEntities(state).toJS()[0].courses);
  }

  return courses;
};
