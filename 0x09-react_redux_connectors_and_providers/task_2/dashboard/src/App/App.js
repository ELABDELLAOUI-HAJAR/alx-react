import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { defaultUser } from './AppContext';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as uiActions from '../actions/uiActionCreators';


class App extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);

    this.state = {
      user: defaultUser,
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() }, },
      ],
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  };

  markNotificationAsRead = (id) => {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((notification) => notification.id != id),
    }));
  };


  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }


  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer, login } = this.props;
    return (
      <AppContext.Provider value={ { user: this.state.user, logOut: this.state.logOut } }>
        <Notifications listNotifications={ this.state.listNotifications }
          displayDrawer={ displayDrawer }
          handleHideDrawer={ handleHideDrawer }
          handleDisplayDrawer={ handleDisplayDrawer }
          markNotificationAsRead={ this.markNotificationAsRead } />
        <div className={ css(styles.app) }>
          <Header />
          <div className={ css(styles.app_body) }>
            {
              this.state.user.isLoggedIn ?
                <BodySectionWithMarginBottom title={ "Course list" }>
                  <CourseList listCourses={ this.listCourses } />
                </BodySectionWithMarginBottom>
                :
                <BodySectionWithMarginBottom title={ "Log in to continue" }>
                  <Login logIn={ login } />
                </BodySectionWithMarginBottom>
            }
            <BodySection title={ "News from the School" }>
              <p>Some texts</p>
            </BodySection>
          </div>
          <Footer className={ css(styles.footer) } />
        </div>
      </AppContext.Provider>
    );
  }

}

const primaryColor = '#e0354b';

const styles = StyleSheet.create({
  app: {
    fontSize: '16px',
  },
  app_body: {
    padding: '3rem',
    height: '47vh',
    borderTop: `3px solid ${primaryColor}`,
  },
  footer: {
    fontStyle: 'italic',
    borderTop: `3px solid ${primaryColor}`,
    display: 'flex',
    justifyContent: 'center',
  }
});

App.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => dispatch(uiActions.displayNotificationDrawer()),
  handleHideDrawer: () => dispatch(uiActions.hideNotificationDrawer()),
  login: () => { },
  logout: () => { },
};
App.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

export const mapDispatchToProps = (dispatch) => ({
  handleDisplayDrawer: () => dispatch(uiActions.displayNotificationDrawer()),
  handleHideDrawer: () => dispatch(uiActions.hideNotificationDrawer()),
  login: uiActions.loginRequest,
  logout: uiActions.logout,
});

export { App as StatelessApp };

export default connect(mapStateToProps, mapDispatchToProps)(App);
