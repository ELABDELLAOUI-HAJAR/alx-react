import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import PropTypes from 'prop-types';

function Footer({ className, user }) {
  return (
    <div className={ className }>
      <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
      { user?.isLoggedIn ?
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

Footer.defaultProps = {
  className: '',
  user: {},
};

Footer.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
};

export const mapStateToProps = (state) => ({
  user: state.get('user'),
});

export { Footer as StatelessFooter };

export default Footer;
