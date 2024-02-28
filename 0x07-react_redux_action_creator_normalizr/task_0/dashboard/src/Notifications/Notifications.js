import React, { PureComponent } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends PureComponent {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <>
                <div className={ ['menuItem', css(styles.menuItem)].join(' ') } onClick={ this.props.handleDisplayDrawer }>
                    Your notifications
                </div>
                {
                    this.props.displayDrawer ?
                        <div className={ ['Notifications', css(styles.notifications)].join(' ') } >
                            <button style={ { float: 'right' } }
                                aria-label='Close'
                                onClick={ this.props.handleHideDrawer }
                                className={ css(styles.btn) }
                            >
                                <img src={ closeIcon }
                                    alt='Close notifications'
                                    className={ css(styles.closeIcon) }
                                />
                            </button>
                            {
                                this.props.listNotifications.length ? (
                                    <>
                                        <p>Here is the list of notifications</p>
                                        <ul className={ css(styles.ul) }>

                                            { this.props.listNotifications.map((notif) => (
                                                <NotificationItem
                                                    key={ notif.id }
                                                    html={ notif.html }
                                                    type={ notif.type }
                                                    value={ notif.value }
                                                    id={ notif.id }
                                                    markAsRead={ this.props.markNotificationAsRead }
                                                />
                                            )) }
                                        </ul>
                                    </>
                                ) :
                                    <p>No new notification for now</p>
                            }
                        </div >
                        :
                        null
                }

            </>
        );
    }
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleHideDrawer: () => { },
    handleDisplayDrawer: () => { },
    markNotificationAsRead: () => { },
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleHideDrawer: PropTypes.func,
    handleDisplayDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
};

const opacityKeyFrames = {
    '0%': {
        opacity: 0.5,
    },
    '100%': {
        opacity: 1,
    },
};

const translateYKeyFrames = {
    '0%': {
        transform: 'translateY(0)',
    },
    '50%': {
        transform: 'translateY(-5px)',
    },
    '100%': {
        transform: 'translateY(5px)',
    },
}

const styles = StyleSheet.create({
    notifications: {
        padding: '0.5rem',
        border: '2px dashed red',
        position: 'fixed',
        backgroundColor: 'white',
        top: 0,
        right: 0,
        '@media (max-width: 900px)': {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: 'none',
            padding: 0,
            fontSize: '20px',
        },
    },
    menuItem: {
        float: 'right',
        backgroundColor: '#fff8f8',
        ':hover': {
            cursor: 'pointer',
            animationName: [opacityKeyFrames, translateYKeyFrames],
            animationDuration: '0.5s',
            animationIterationCount: 3,
        },
    },
    ul: {
        listStyle: 'none',
        padding: 0,
    },
    btn: {
        backgroundColor: 'transparent',
        border: 'none',
    },
    p: {
        display: 'block',
        minWidth: '250px',
    },
    closeIcon: {
        width: '15px',
        height: '15px',
    }
});

export default Notifications;
