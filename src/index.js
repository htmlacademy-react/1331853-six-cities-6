import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {places} from './mocks/places';

const Setting = {
  OFFERS_COUNT: 5
};

ReactDOM.render(
    <App offersCount={Setting.OFFERS_COUNT} places={places} />,
    document.querySelector(`#root`)
);
