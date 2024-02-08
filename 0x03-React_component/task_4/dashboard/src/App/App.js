import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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
      this.props.logOut();
    }
  };

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown);
  }


  render () {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications listNotifications={ this.listNotifications } />
        <div className="App">
          <Header />
          <div className='App-body'>
            {
              isLoggedIn ?
                <BodySectionWithMarginBottom title={ "Course list" }>
                  <CourseList listCourses={ this.listCourses } />
                </BodySectionWithMarginBottom>
                :
                <BodySectionWithMarginBottom title={ "Log in to continue" }>
                  <Login />
                </BodySectionWithMarginBottom>
            }
            <BodySection title={ "News from the School" }>
              <p>Some texts</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </>
    );
  }

}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { },
};

export default App;
