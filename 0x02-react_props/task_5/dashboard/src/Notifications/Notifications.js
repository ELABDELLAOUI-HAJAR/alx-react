import React from 'react';
import './Notifications.css';
import closeIcon from '../../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications ({ displayDrawer, listNotifications }) {
    function buttonHandler () {
        console.log('Close button has been clicked');
    }

    return (
        <>
            <div className="menuItem">
                Your notifications
            </div>
            {
                displayDrawer ?
                    <div className="Notifications" >
                        <button style={ { float: 'right' } } aria-label='Close' onClick={ buttonHandler }>
                            <img src={ closeIcon } alt='Close notifications' />
                        </button>
                        {
                            listNotifications.length ? (
                                <>
                                    <p>Here is the list of notifications</p>
                                    <ul>

                                        { listNotifications.map((notif) => (
                                            <NotificationItem
                                                key={ notif.id }
                                                html={ notif.html }
                                                type={ notif.type }
                                                value={ notif.value } />
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

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;