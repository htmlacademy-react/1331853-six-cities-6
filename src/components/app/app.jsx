import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../../pages/main/main';
import MainEmpty from '../../pages/main/empty/empty';
import PlaceProperty from '../../pages/place-property/place-property';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import FavoritesEmpty from '../../pages/favorites/empty/empty';
import Page404 from '../../pages/page-404/page-404';

import {Routes} from './../../const';

const {MAIN: pathMain, MAIN_EMPTY: pathMainEmpty, OFFER: pathOffer, LOGIN: pathLogin, FAVOR: pathFavor, FAVOR_EMPTY: pathFavorEmpty} = Routes;

const App = ({offersCount, places, auth, userName}) => (
  <BrowserRouter>
    <Switch>

      <Route exact path={pathMain}>
        <Main offersCount={offersCount} auth={auth} userName={userName} places={places} />
      </Route>

      <Route exact path={pathMainEmpty}>
        <MainEmpty auth={auth} userName={userName} />
      </Route>

      <Route exact path={pathOffer}>
        <PlaceProperty auth={auth} userName={userName} />
      </Route>

      <Route exact path={pathLogin}>
        <Login />
      </Route>

      <Route exact path={pathFavor}>
        <Favorites auth={auth} userName={userName} />
      </Route>

      <Route exact path={pathFavorEmpty}>
        <FavoritesEmpty auth={auth} userName={userName} />
      </Route>

      <Route>
        <Page404 auth={auth} userName={userName} />
      </Route>

    </Switch>
  </BrowserRouter>
);


App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

export default App;
