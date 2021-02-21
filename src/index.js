import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {reducer} from './store/reducer';

const Settings = {
  AUTH: true,
  USER_NAME: `Oliver.conner@gmail.com`,
  CITY: `Amsterdam`
};

const {AUTH: auth, USER_NAME: userName, CITY: city} = Settings;

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App auth={auth} userName={userName} offers={offers} reviews={reviews} city={city} />
    </Provider>,

    document.querySelector(`#root`)
);
