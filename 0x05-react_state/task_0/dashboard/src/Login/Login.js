import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login () {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <form className={ css(styles.form) }>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input name='email' id='email' type='text' className={ css(styles.no_border) } />
                </div>
                <div>
                    <label htmlFor='password' className={ css(styles.btn_label) } >Password: </label>
                    <input name='password' id='password' type='password' className={ css(styles.no_border) } />
                </div>
                <button className={ css(styles.btn_label, styles.btn) }>OK</button>
            </form>
        </>
    );
}

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        '@media only screen and (max-width: 900px)': {
            flexDirection: 'column',
        },
    },
    btn_label: {
        marginLeft: '1rem',
        '@media (max-width: 900px)': {
            marginLeft: '0px',
        },
        alignSelf: 'flex-start',
    },
    no_border: {
        border: 'none',
    },
    btn: {
        border: '0.25rem solid #D4B37F',
        padding: '0.25rem 0.50rem',
        borderRadius: '0.30rem',
        backgroundColor: 'transparent',
    }
});

export default Login;
