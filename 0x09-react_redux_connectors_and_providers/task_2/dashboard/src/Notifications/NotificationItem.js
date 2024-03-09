import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
    render () {
        const { type, value, html, markAsRead, id } = this.props;
        const className = type === 'urgent' ? css(styles.urgent, styles.li) : css(styles.default, styles.li);
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
    li: {
        '@media (max-width: 900px)': {
            borderBottom: '0.10rem solid black',
            padding: '10px 8px',
        },
    },
});

export default NotificationItem;
