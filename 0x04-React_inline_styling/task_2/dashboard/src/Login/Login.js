import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login () {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email: </label>
            <input name='email' id='email' type='text' />
            <label htmlFor='password' className={ css(styles.btn_label) } >Password: </label>
            <input name='password' id='password' type='password' />
            <button className={ css(styles.btn_label) }>OK</button>
        </>
    );
}

const styles = StyleSheet.create({
    btn_label: {
        marginLeft: '1rem',
    }
});

export default Login;
