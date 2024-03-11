import { createContext } from 'react';

export const defaultUser = { email: '', password: '', isLoggedIn: false };

function logOut () { };

const AppContext = createContext({
    defaultUser,
    logOut,
});

export default AppContext;
