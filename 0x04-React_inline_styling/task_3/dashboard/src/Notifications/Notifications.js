import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.buttonHandler = this.buttonHandler.bind(this);
        this.markAsRead = this.markAsRead.bind(this);
    }

    buttonHandler () {
        console.log('Close button has been clicked');
    }

    markAsRead (id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.length > this.props.listNotifications.length;
    }

    render () {
        return (
            <>
                <div className={ ['menuItem', css(styles.menuItem)].join(' ') }>
                    Your notifications
                </div>
                {
                    this.props.displayDrawer ?
                        <div className={ ['Notifications', css(styles.notifications)].join(' ') } >
                            <button style={ { float: 'right' } }
                                aria-label='Close'
                                onClick={ this.buttonHandler }
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
                                                    markAsRead={ this.markAsRead }
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
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

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
        textAlign: 'right',
        width: '100 %',
        marginBottom: '1rem',
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
