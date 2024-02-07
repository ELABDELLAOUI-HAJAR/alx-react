import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
    return (
        <tr>
            {
                isHeader ? (
                    textSecondCell ? (
                        <>
                            <th>{ textFirstCell }</th>
                            <th>{ textSecondCell }</th>
                        </>
                    ) : (
                        <th colSpan={ 2 } >{ textFirstCell }</th>
                    )
                ) : (
                    <>
                        <td>{ textFirstCell }</td>
                        <td>{ textSecondCell }</td>
                    </>
                )
            }
        </tr>
    );
}

CourseListRow.defaultProps = {
    isHeader: false,
    textFirstCell: '',
    textSecondCell: '',
};

CourseListRow.propTypes = {
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
