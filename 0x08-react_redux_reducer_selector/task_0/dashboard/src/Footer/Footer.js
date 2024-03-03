import React, { useContext } from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import AppContext from '../App/AppContext';

function Footer ({ className }) {
    const { user } = useContext(AppContext);
    const { isLoggedIn } = user;

    return (
        <div className={ className }>
            <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
            { isLoggedIn ?
                (
                    <p>
                        <a href='#'>Contact us</a>
                    </p>
                )
                : null
            }
        </div>
    );
}

export default Footer;
