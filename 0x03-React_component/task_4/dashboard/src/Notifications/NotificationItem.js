import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
    render () {
        const { type, value, html, markAsRead, id } = this.props;
        return (
            html ? (
                <li data-notification-type={ type } dangerouslySetInnerHTML={ html } onClick={ () => markAsRead(id) }></li >
            ) : (
                <li data-notification-type={ type } onClick={ () => markAsRead(id) } >{ value }</li>
            )
        );
    }
}

NotificationItem.propType = {
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number,
};

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    markAsRead: () => { },
    id: 0,
}

export default NotificationItem;
