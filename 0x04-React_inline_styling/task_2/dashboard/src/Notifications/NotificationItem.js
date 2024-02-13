import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
    render () {
        const { type, value, html, markAsRead, id } = this.props;
        const className = css(type === 'urgent' ? styles.urgent : styles.default);
        return (
            html ? (
                <li data-notification-type={ type }
                    dangerouslySetInnerHTML={ html }
                    onClick={ () => markAsRead(id) }
                    className={ className }
                ></li >
            ) : (
                <li data-notification-type={ type }
                    onClick={ () => markAsRead(id) }
                    className={ className }
                >
                    { value }
                </li>
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

const styles = StyleSheet.create({
    default: {
        color: 'blue',
    },
    urgent: {
        color: 'red',
    },
});

export default NotificationItem;
