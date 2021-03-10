import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus, Routes} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';


const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        switch (path) {
          case Routes.LOGIN:
            return authorizationStatus === AuthorizationStatus.NO_AUTH
              ? render(routeProps)
              : <Redirect to={Routes.MAIN} />;
          default:
            return authorizationStatus === AuthorizationStatus.AUTH
              ? render(routeProps)
              : <Redirect to={Routes.LOGIN} />;
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});


export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
