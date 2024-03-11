import React, { Component } from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class BodySectionWithMarginBottom extends Component {
    render () {
        return (
            <div className={ css(styles.sectionWithMargin) }>
                <BodySection { ...this.props } />
            </div>
        );
    }
}

BodySectionWithMarginBottom.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.string,
}

const styles = StyleSheet.create({
    sectionWithMargin: {
        marginBottom: '40px',
    }
});

export default BodySectionWithMarginBottom;
