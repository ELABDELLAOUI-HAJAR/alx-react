import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user, logout } = this.props;

    return (
      <>
        <div className={ css(styles.header) }>
          <img className={ css(styles.logo) } src={ logo } alt='Holberton logo' />
          <h1 className={ css(styles.heading) }>School dashboard</h1>
        </div>
        { user?.email ? (
          <section id='logoutSection'>
            <p>
              Welcome { user.email } (
              <a href='#' id='logOut' onClick={ logout }>
                logout
              </a>
              )
            </p>
          </section>
        ) : null }
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '300px',
    height: '300px',
  },
  heading: {
    color: '#e0354b',
  },
});

Header.defaultProps = {
  user: {},
};
Header.propTypes = {
  user: PropTypes.object,
};

export const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

export const mapDispatchToProps = {
  logout,
};

export { Header as StatelessHeader };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
