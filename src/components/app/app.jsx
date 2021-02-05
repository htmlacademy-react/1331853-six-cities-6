import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import PlaceProperty from '../place-property/place-property';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Page404 from '../page-404/page-404';

const App = ({offersCount, places, auth, userName}) => {
  return (
    <>
      <Main offersCount={offersCount} auth={auth} userName={userName} places={places} />
      <PlaceProperty auth={auth} userName={userName} />
      <Login />
      <Favorites auth={auth} userName={userName} />
      <Page404 auth={auth} userName={userName}/>
    </>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

export default App;
