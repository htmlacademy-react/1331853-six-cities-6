import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Settings = {
  AUTH: true,
  USER_NAME: `Oliver.conner@gmail.com`
};

const {AUTH: auth, USER_NAME: userName} = Settings;

ReactDOM.render(
    <App auth={auth} userName={userName} offers={offers} reviews={reviews}/>,
    document.querySelector(`#root`)
);
