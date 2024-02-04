import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem ({ type, html, value }) {
    return (
        html ? (
            <li data-notification-type={ type } dangerouslySetInnerHTML={ { __html: html } }></li >
        ) : (
            <li data-notification-type={ type }>{ value }</li>
        )
    );
}

NotificationItem.propType = {
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
};

NotificationItem.defaultProps = {
    html: '',
    type: 'default',
    value: '',
}

export default NotificationItem;
