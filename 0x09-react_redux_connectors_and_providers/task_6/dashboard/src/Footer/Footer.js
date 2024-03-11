import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Footer({ className, user }) {
  return (
    <div className={className}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user?.email ? (
        <p>
          <a href='#'>Contact us</a>
        </p>
      ) : null}
    </div>
  );
}

Footer.defaultProps = {
  user: {},
  className: '',
};
Footer.propTypes = {
  user: PropTypes.object,
  className: PropTypes.string,
};

export const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

export { Footer as StatelessFooter };
export default connect(mapStateToProps)(Footer);
