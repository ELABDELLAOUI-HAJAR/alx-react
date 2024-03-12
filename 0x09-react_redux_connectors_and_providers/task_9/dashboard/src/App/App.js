import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import { loginRequest, logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';
import NotificationsContainer from '../Notifications/NotificationsContainer';

class App extends Component {
  constructor(props) {
    super(props);
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

  render() {
    const { isLoggedIn, login } = this.props;
    return (
      <div className={css(styles.app)}>
        <NotificationsContainer />
        <Header />
        <div className={css(styles.app_body)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login logIn={login} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit enim varius cursus luctus. Proin
              quis erat vitae ante accumsan lobortis. Etiam et gravida lorem. Cras faucibus id ligula a cursus. Sed
              porta mauris non fringilla lacinia. Praesent sit amet leo tellus. Fusce vestibulum, massa eget egestas
              aliquet, lacus orci euismod purus, sed ullamcorper erat mauris a tortor.
            </p>
          </BodySection>
        </div>
        <Footer className={css(styles.footer)} />
      </div>
    );
  }
}

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

App.defaultProps = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  login: PropTypes.func,
  logout: PropTypes.func,
};

export const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
});

export const mapDispatchToProps = {
  login: loginRequest,
  logout: logout,
};

export { App as StatelessApp };
export default connect(mapStateToProps, mapDispatchToProps)(App);
