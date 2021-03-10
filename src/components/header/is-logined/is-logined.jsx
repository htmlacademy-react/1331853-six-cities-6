import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus, Routes} from './../../../const';

const IsLogined = ({authorizationStatus, userName, avatarUrl}) => {
  return (
    <Link className="header__nav-link header__nav-link--profile" to={Routes.FAVOR}>
      <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${avatarUrl})`}}>
      </div>
      <span className="header__user-name user__name">{authorizationStatus === AuthorizationStatus.AUTH ? userName : `Sign in`}</span>
    </Link>
  );
};

IsLogined.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userName: USER.userName,
  avatarUrl: USER.avatarUrl
});

export {IsLogined};
export default connect(mapStateToProps, null)(IsLogined);
