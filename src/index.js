import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {places} from './mocks/places';

const Settings = {
  OFFERS_COUNT: 5,
  AUTH: false,
  USER_NAME: `Oliver.conner@gmail.com`
};

const {OFFERS_COUNT: offersCount, AUTH: auth, USER_NAME: userName} = Settings;

ReactDOM.render(
    <App offersCount={offersCount} auth={auth} userName={userName} places={places}/>,
    document.querySelector(`#root`)
);
