import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

const Settings = {
  AUTH: false,
  USER_NAME: `Oliver.conner@gmail.com`
};

const {AUTH: auth, USER_NAME: userName} = Settings;

ReactDOM.render(
    <App auth={auth} userName={userName} offers={offers}/>,
    document.querySelector(`#root`)
);
