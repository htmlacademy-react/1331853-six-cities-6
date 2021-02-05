import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {places} from './mocks/places';

const Setting = {
  OFFERS_COUNT: 5,
  AUTH: false
};

const {OFFERS_COUNT: offersCount, AUTH: auth} = Setting;

ReactDOM.render(
    <App offersCount={offersCount} places={places} auth={auth} />,
    document.querySelector(`#root`)
);
