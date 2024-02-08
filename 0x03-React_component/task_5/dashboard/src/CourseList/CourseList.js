import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList ({ listCourses }) {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell={ "Available courses" } isHeader={ true } />
                <CourseListRow textFirstCell={ "Course name" } textSecondCell={ "Credit" } isHeader={ true } />
            </thead>
            <tbody>
                {
                    listCourses.length ? (
                        listCourses.map((elmt) => (
                            <CourseListRow
                                isHeader={ false }
                                key={ elmt.id }
                                textFirstCell={ elmt.name }
                                textSecondCell={ elmt.credit }
                            />
                        )))
                        :
                        <CourseListRow textFirstCell={ "No course available yet" } isHeader={ false } />
                }
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
};

export default CourseList;
