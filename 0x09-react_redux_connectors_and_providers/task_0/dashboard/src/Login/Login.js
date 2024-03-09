import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login ({ logIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setEnableSubmit] = useState(false);

    function handleLoginSubmit (event) {
        event.preventDefault();
        logIn(email, password);
    }

    function handleChangeEmail (event) {
        setEmail(event.target.value);
    }

    function handleChangePassword (event) {
        setPassword(event.target.value);
    }

    useEffect(() => {
        if (email !== '' && password !== '') {
            setEnableSubmit(true);
        }
        else {
            if (enableSubmit != false) {
                setEnableSubmit(false);
            }
        }
    }, [email, password]);

    return (
        <>
            <p>Login to access the full dashboard</p>
            <form className={ css(styles.form) } onSubmit={ handleLoginSubmit }>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input name='email' id='email' type='text' className={ css(styles.no_border) }
                        value={ email } onChange={ handleChangeEmail } />
                </div>
                <div>
                    <label htmlFor='password' className={ css(styles.btn_label) } >Password: </label>
                    <input name='password' id='password' type='password' className={ css(styles.no_border) }
                        value={ password } onChange={ handleChangePassword } />
                </div>
                <input type='submit' className={ css(styles.btn_label, styles.btn) }
                    disabled={ !enableSubmit } value={ 'OK' } />
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
