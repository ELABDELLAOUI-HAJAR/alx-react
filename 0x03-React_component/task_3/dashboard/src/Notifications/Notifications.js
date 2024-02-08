import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

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

    render () {
        return (
            <>
                <div className="menuItem">
                    Your notifications
                </div>
                {
                    this.props.displayDrawer ?
                        <div className="Notifications" >
                            <button style={ { float: 'right' } } aria-label='Close' onClick={ this.buttonHandler }>
                                <img src={ closeIcon } alt='Close notifications' />
                            </button>
                            {
                                this.props.listNotifications.length ? (
                                    <>
                                        <p>Here is the list of notifications</p>
                                        <ul>

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

export default Notifications;
