import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PropTypes from 'prop-types';

import Main from '../../pages/main/main';
import OfferProperty from '../../pages/offer-property/offer-property';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Page404 from '../../pages/page-404/page-404';
import {PrivateRoute} from '../private-route/private-route';

import {Routes} from './../../const';


const {MAIN: pathMain, OFFER: pathOffer, LOGIN: pathLogin, FAVOR: pathFavor} = Routes;

const App = () => {

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={pathMain}>
          <Main />
        </Route>

        <Route exact path={pathOffer}>
          <OfferProperty/>
        </Route>

        <Route exact path={pathLogin}>
          <Login />
        </Route>

        <PrivateRoute
          exact
          path={pathFavor}
          render={()=> <Favorites/>}
        >
        </PrivateRoute>

        <Route>
          <Page404 />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default App;
