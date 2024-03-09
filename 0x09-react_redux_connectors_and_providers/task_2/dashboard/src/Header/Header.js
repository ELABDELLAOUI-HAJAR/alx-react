import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

class Header extends Component {
    static contextType = AppContext;
    render () {
        const { user, logOut } = this.context;
        const { email, isLoggedIn } = user;

        return (
            <>
                <div className={ css(styles.header) }>
                    <img src={ logo } className={ css(styles.logo) } alt="logo" />
                    <h1 className={ css(styles.heading) }>School dashboard</h1>
                </div >
                {
                    isLoggedIn ? (
                        <section id='logoutSection'>
                            <p>
                                Welcome { email } (
                                <a href='#' id='logOut' onClick={ logOut }>
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

export default Header;
