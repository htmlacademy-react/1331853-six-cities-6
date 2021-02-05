import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../main/main';
import MainEmpty from '../main/main-empty/main-empty';
import PlaceProperty from '../place-property/place-property';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites/favorites-empty/favorites-empty';
import Page404 from '../page-404/page-404';

const App = ({offersCount, places, auth, userName}) => (
  <BrowserRouter>
    <Switch>

      <Route exact path="/">
        <Main offersCount={offersCount} auth={auth} userName={userName} places={places} />
      </Route>

      <Route exact path="/dev-main-empty">
        <MainEmpty auth={auth} userName={userName} />
      </Route>

      <Route exact path="/offer:id?">
        <PlaceProperty auth={auth} userName={userName} />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/favorites">
        <Favorites auth={auth} userName={userName} />
      </Route>

      <Route exact path="/dev-favorites-empty">
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
