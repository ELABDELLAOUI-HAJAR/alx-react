import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { defaultUser } from './AppContext';

class App extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => {
        this.setState({
          user: defaultUser,
        });
      },
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() }, },
  ];

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.state.logOut();
    }
  };

  handleDisplayDrawer () {
    this.setState({
      displayDrawer: true
    });
  };

  handleHideDrawer () {
    this.setState({
      displayDrawer: false
    });
  };

  logIn (email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  };


  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown);
  }


  render () {

    return (
      <AppContext.Provider value={ { user: this.state.user, logOut: this.state.logOut } }>
        <Notifications listNotifications={ this.listNotifications }
          displayDrawer={ this.state.displayDrawer }
          handleHideDrawer={ this.handleHideDrawer }
          handleDisplayDrawer={ this.handleDisplayDrawer } />
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
                  <Login logIn={ this.logIn } />
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

export default App;
