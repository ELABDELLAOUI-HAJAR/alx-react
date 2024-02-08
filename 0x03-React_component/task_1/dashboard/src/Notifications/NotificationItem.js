import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem ({ type, html, value }) {
    return (
        html ? (
            <li data-notification-type={ type } dangerouslySetInnerHTML={ html }></li >
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
    type: 'default',
    value: '',
}

export default NotificationItem;
