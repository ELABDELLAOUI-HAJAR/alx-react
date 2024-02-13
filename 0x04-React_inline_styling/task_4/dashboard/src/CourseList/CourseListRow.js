import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
    const bgColor = { backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' };
    return (
        <tr style={ bgColor } className={ isHeader ? css(styles.tr) : null }>
            {
                isHeader ? (
                    textSecondCell ? (
                        <>
                            <th className={ css(styles.th) }>{ textFirstCell }</th>
                            <th className={ css(styles.th) }>{ textSecondCell }</th>
                        </>
                    ) : (
                        <th colSpan={ 2 } className={ css(styles.center_th) }>{ textFirstCell }</th >
                    )
                ) : (
                    <>
                        <td>{ textFirstCell }</td>
                        <td>{ textSecondCell }</td>
                    </>
                )
            }
        </tr >
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

const styles = StyleSheet.create({
    tr: {
        border: '1px solid lightgrey',
    },
    center_th: {
        textAlign: 'center'
    },
    th: {
        textAlign: 'left',
    }
});

export default CourseListRow;
