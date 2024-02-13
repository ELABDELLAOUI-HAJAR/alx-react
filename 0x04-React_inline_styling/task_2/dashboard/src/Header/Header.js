import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header () {
    return (
        <div className={ css(styles.header) }>
            <img src={ logo } className={ css(styles.logo) } alt="logo" />
            <h1 className={ css(styles.heading) }>School dashboard</h1>
        </div>
    );
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
