import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const main_color = '#e0354b';
const styles = new StyleSheet.create({
  app: {
    fontSize: '20px',
  },
  app_body: {
    boxSizing: 'border-box',
    padding: '3rem',
    minHeight: '50vh',
    borderTop: `5px solid ${main_color}`,
  },
  footer: {
    borderTop: `5px solid ${main_color}`,
    display: 'flex',
    justifyContent: 'center',
    fontStyle: 'italic',
    justifyContent: 'space-around',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listNotifications: [
        {
          id: 0,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 1,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 2,
          type: 'urgent',
          html: { __html: getLatestNotification() },
        },
      ],
    };

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut = (evt) => {
    if (evt.ctrlKey && evt.key === 'h') {
      evt.preventDefault();
      alert('Logging you out');
      this.props.logout();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleLogOut);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleLogOut);
  }

  markNotificationAsRead = (id) => {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((notif) => notif.id != id),
    }));
  };

  render() {
    const { listNotifications } = this.state;
    const { isLoggedIn, displayDrawer, handleDisplayDrawer, handleHideDrawer, login } = this.props;
    return (
      <div className={ css(styles.app) }>
        <Notifications
          listNotifications={ listNotifications }
          markNotificationAsRead={ this.markNotificationAsRead }
          displayDrawer={ displayDrawer }
          handleDisplayDrawer={ handleDisplayDrawer }
          handleHideDrawer={ handleHideDrawer }
        />
        <Header />
        <div className={ css(styles.app_body) }>
          { isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={ listCourses } />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login logIn={ login } />
            </BodySectionWithMarginBottom>
          ) }
          <BodySection title='News from the School'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit enim varius cursus luctus. Proin
              quis erat vitae ante accumsan lobortis. Etiam et gravida lorem. Cras faucibus id ligula a cursus. Sed
              porta mauris non fringilla lacinia. Praesent sit amet leo tellus. Fusce vestibulum, massa eget egestas
              aliquet, lacus orci euismod purus, sed ullamcorper erat mauris a tortor.
            </p>
          </BodySection>
        </div>
        <Footer className={ css(styles.footer) } />
      </div>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  handleDisplayDrawer: () => { },
  handleHideDrawer: () => { },
  login: () => { },
  logout: () => { },
};
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

export const mapDispatchToProps = {
  handleDisplayDrawer: displayNotificationDrawer,
  handleHideDrawer: hideNotificationDrawer,
  login: loginRequest,
  logout: logout,
};

export { App as StatelessApp };
export default connect(mapStateToProps, mapDispatchToProps)(App);
