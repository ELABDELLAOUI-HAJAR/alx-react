import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite/no-important';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

function Notifications({
  listNotifications,
  markAsRead,
  setNotificationFilter,
  displayDrawer,
  handleDisplayDrawer,
  handleHideDrawer,
}) {
  return (
    <>
      {!displayDrawer ? (
        <div className={['menuItem', css(styles.menuItem)].join(' ')} onClick={handleDisplayDrawer}>
          Your notifications
        </div>
      ) : (
        <div className={['Notifications', css(styles.notifications)].join(' ')}>
          <button className={css(styles.btn)} aria-label='Close' onClick={handleHideDrawer} style={{ float: 'right' }}>
            <img className={css(styles.closeIcon)} src={closeIcon} alt='Close notifications' />
          </button>

          {listNotifications.length ? (
            <>
              <p className={css(styles.p)}>Here is the list of notifications</p>
              <div className={css(styles.filter)}>
                <button
                  id='urgent'
                  className={css(styles.filterButtons)}
                  onClick={() => setNotificationFilter(NotificationTypeFilters.URGENT)}
                >
                  !!
                </button>
                <button
                  id='default'
                  className={css(styles.filterButtons)}
                  onClick={() => setNotificationFilter(NotificationTypeFilters.DEFAULT)}
                >
                  💠
                </button>
              </div>
              <ul className={css(styles.ul)}>
                {listNotifications.map((notif) => (
                  <NotificationItem
                    key={notif.guid}
                    id={notif.guid}
                    type={notif.type}
                    html={notif.html}
                    value={notif.value}
                    markAsRead={markAsRead}
                  />
                ))}
              </ul>
            </>
          ) : (
            <p>No new notification for now</p>
          )}
        </div>
      )}
    </>
  );
}

const opcityKeyFrames = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};
const trasnlateYKeyFrames = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const styles = StyleSheet.create({
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [opcityKeyFrames, trasnlateYKeyFrames],
      animationDuration: '0.5s',
      animationIterationCount: 3,
    },
  },
  notifications: {
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    right: 0,
    padding: '1rem',
    border: '2px dashed red',
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: 'none',
      padding: 0,
    },
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  p: {
    display: 'block',
    minWidth: '250px',
  },
  btn: {
    backgroundColor: 'transparent',
    border: 'none',
  },
  closeIcon: {
    width: '15px',
    height: '15px',
  },
  filter: {
    display: 'flex',
    alignItems: 'center',
  },
  filterButtons: {
    width: '50px',
    height: '25px',
    backgroundColor: 'transparent',

    marginRight: '5px',
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  setNotificationFilter: () => {},
};
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

export default Notifications;
