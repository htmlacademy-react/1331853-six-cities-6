import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Settings = {
  AUTH: true,
  USER_NAME: `Oliver.conner@gmail.com`,
  CITY: `Amsterdam`
};

const {AUTH: auth, USER_NAME: userName, CITY: city} = Settings;

ReactDOM.render(
    <App auth={auth} userName={userName} offers={offers} reviews={reviews} city={city}/>,
    document.querySelector(`#root`)
);
