import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus, Routes} from './../../../const';

const IsLogined = ({authorizationStatus, userName}) => {
  return (
    <Link className="header__nav-link header__nav-link--profile" to={Routes.FAVOR}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{authorizationStatus === AuthorizationStatus.AUTH ? userName : `Sign in`}</span>
    </Link>
  );
};

IsLogined.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = ({authorizationStatus, userName}) => ({
  authorizationStatus,
  userName
});

export {IsLogined};
export default connect(mapStateToProps, null)(IsLogined);
