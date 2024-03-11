import React, { Component } from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
	render() {
		return (
			<div className={css(styles.sectionWithMarginBottom)}>
				<BodySection {...this.props} />
			</div>
		);
	}
}

const styles = StyleSheet.create({
	sectionWithMarginBottom: {
		marginBottom: '40px',
	},
});

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.element,
};

export default BodySectionWithMarginBottom;
