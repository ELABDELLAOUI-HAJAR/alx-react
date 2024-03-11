import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { logout } from '../actions/uiActionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user, logout } = this.props;

    return (
      <>
        <div className={ css(styles.header) }>
          <img src={ logo } className={ css(styles.logo) } alt="logo" />
          <h1 className={ css(styles.heading) }>School dashboard</h1>
        </div >
        {
          user?.isLoggedIn ? (
            <section id='logoutSection'>
              <p>
                Welcome { user.email } (
                <a href='#' id='logOut' onClick={ logout }>
                  logout
                </a>
                )
              </p>
            </section>
          ) : null
        }
      </>
    );
  };

}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '150px',
    height: '150px'
  },
  heading: {
    color: '#e0354b',
  }
});

Header.defaultProps = {
  user: {},
};

Header.propTypes = {
  user: PropTypes.object,
};

export const mapStateToProps = (state) => ({
  user: state.get('user'),
});

export const mapDispatchToProps = {
  logout,
};

export { Header as StatelessHeader };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
