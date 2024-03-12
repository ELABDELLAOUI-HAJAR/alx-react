import React, { Component } from 'react';
import Notifications from './Notifications';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';

class NotificationsContainer extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return <Notifications {...this.props} />;
  }
}

NotificationsContainer.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
  setNotificationFilter: () => {},
};

NotificationsContainer.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

const mapSateToProps = (state) => ({
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
  listNotifications: getUnreadNotificationsByType(state.notifications),
});
const mapDispatchToProps = {
  handleDisplayDrawer: displayNotificationDrawer,
  handleHideDrawer: hideNotificationDrawer,
  fetchNotifications,
  markAsRead,
  setNotificationFilter,
};

export { NotificationsContainer as NotificationsContainerStateless };
export default connect(mapSateToProps, mapDispatchToProps)(NotificationsContainer);
