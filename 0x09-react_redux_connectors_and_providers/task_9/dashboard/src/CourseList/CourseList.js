import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';
import { connect } from 'react-redux';

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }
  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
      return;
    }
    this.props.unSelectCourse(id);
  }

  render() {
    const { listCourses } = this.props;
    return (
      <table id='CourseList' className={css(styles.table)}>
        <thead>
          <CourseListRow textFirstCell='Available courses' isHeader={true} />
          <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
        </thead>
        <tbody className={css(styles.tbody)}>
          {listCourses.length ? (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                id={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}
                isChecked={course.isSelected}
                onChangeRow={this.onChangeRow}
              />
            ))
          ) : (
            <CourseListRow textFirstCell='No course available yet' isHeader={false} />
          )}
        </tbody>
      </table>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tbody: {
    border: '1px solid #000000',
  },
});

CourseList.defaultProps = {
  listCourses: [],
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
};
CourseList.propTypes = {
  listCourses: PropTypes.array,
  fetchCourses: PropTypes.func,
  selectCourse: PropTypes.func,
  unSelectCourse: PropTypes.func,
};

const mapStateToProps = (state) => ({
  listCourses: getListCourses(state.courses),
});
const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export { CourseList as StatelessCourseList };
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
