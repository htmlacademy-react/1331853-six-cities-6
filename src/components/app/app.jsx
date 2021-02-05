import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';
import MainEmpty from '../main/main-empty/main-empty';

import PlaceProperty from '../place-property/place-property';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites/favorites-empty/favorites-empty';

import Page404 from '../page-404/page-404';

const App = ({offersCount, places, auth, userName}) => (
  <>
    <Main offersCount={offersCount} auth={auth} userName={userName} places={places} />
    <MainEmpty auth={auth} userName={userName}/>
    <PlaceProperty auth={auth} userName={userName} />
    <Login />
    <Favorites auth={auth} userName={userName} />
    <FavoritesEmpty auth={auth} userName={userName} />
    <Page404 auth={auth} userName={userName}/>
  </>
);


App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

export default App;
