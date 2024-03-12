import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	tr: {
		border: '1px solid #000000',
	},
	th: {
		textAlign: 'left',
	},
	rowChecked: {
		backgroundColor: '#e6e4e4',
	},
});

function CourseListRow({ id, isHeader, textFirstCell, textSecondCell, isChecked, onChangeRow }) {
	const bg = { backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' };

	return (
		<tr style={ bg } className={ isHeader ? css(styles.tr) : isChecked ? css(styles.rowChecked) : null }>
			{ isHeader ? (
				textSecondCell ? (
					<>
						<th className={ css(styles.th) }>{ textFirstCell }</th>
						<th className={ css(styles.th) }>{ textSecondCell }</th>
					</>
				) : (
					<th colSpan={ 2 }>{ textFirstCell }</th>
				)
			) : (
				<>
					<td>
						<input
							type='checkbox'
							checked={ isChecked }
							onChange={ () => onChangeRow(id, !isChecked) }
						/>
						{ textFirstCell }
					</td>
					<td>{ textSecondCell }</td>
				</>
			) }
		</tr>
	);
}

export default CourseListRow;

CourseListRow.defaultProps = {
	isHeader: false,
	textFirstCell: '',
	textSecondCell: '',
	isChecked: false,
};

CourseListRow.propTypes = {
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isChecked: PropTypes.bool,
};
