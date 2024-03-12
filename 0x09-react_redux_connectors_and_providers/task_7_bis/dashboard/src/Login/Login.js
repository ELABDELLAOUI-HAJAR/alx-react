import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

export default function Login({ logIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    logIn(email, password);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    handleEnableSubmit(evt.target.value, email);
  }
  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    handleEnableSubmit(password, evt.target.value);
  }
  function handleEnableSubmit(email, password) {
    setEnableSubmit(email && password);
  }

  return (
    <>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor='email'>Email: </label>
          <input name='email' id='email' type='email' onChange={handleChangeEmail} value={email} />
        </div>
        <div>
          <label className={css(styles.label_btn)} htmlFor='password'>
            Password:{' '}
          </label>
          <input name='password' id='password' type='password' onChange={handleChangePassword} value={password} />
        </div>
        <input type='submit' className={css(styles.label_btn)} value='Ok' disabled={!enableSubmit} />
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
  label_btn: {
    marginLeft: '10px',
    '@media (max-width: 900px)': {
      marginLeft: '0px',
    },
    alignSelf: 'flex-start',
  },
});

Login.defaultProps = {
  logIn: () => {},
};
Login.propTypes = {
  logIn: PropTypes.func,
};
