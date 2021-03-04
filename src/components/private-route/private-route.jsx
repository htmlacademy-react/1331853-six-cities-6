import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {PropTypes} from 'prop-types';

import {AuthorizationStatus} from '../../const';


const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  return (
    <Route path={path} exact={exact} render={(routeProps) => {
      return (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={`/login`} />
      );
    }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
