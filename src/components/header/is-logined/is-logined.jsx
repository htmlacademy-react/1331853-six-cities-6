import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

const IsLogined = ({auth = false, userName = ``}) => {
  return auth ?
    <Link className="header__nav-link header__nav-link--profile" to="/favorites">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{userName}</span>
    </Link> :
    <Link className="header__nav-link header__nav-link--profile" to="/login">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">Sign in</span>
    </Link>;

};

IsLogined.propTypes = {
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

export default IsLogined;
