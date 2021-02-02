import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = ({offersCount, places}) => {
  return (
    <Main offersCount={offersCount} places={places}/>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default App;
