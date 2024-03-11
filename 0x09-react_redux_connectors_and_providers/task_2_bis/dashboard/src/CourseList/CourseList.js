import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

function CourseList ({ listCourses }) {
    return (
        <table id="CourseList" className={ css(styles.table) }>
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

const styles = StyleSheet.create({
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
});

export default CourseList;
