import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PropTypes from 'prop-types';

import Main from '../../pages/main/main';
import OfferProperty from '../../pages/offer-property/offer-property';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Page404 from '../../pages/page-404/page-404';

import {Routes} from './../../const';


const {MAIN: pathMain, OFFER: pathOffer, LOGIN: pathLogin, FAVOR: pathFavor} = Routes;

const App = ({userName}) => {

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={pathMain}>
          <Main userName={userName} />
        </Route>

        <Route exact path={pathOffer}>
          <OfferProperty userName={userName}/>
        </Route>

        <Route exact path={pathLogin}>
          <Login />
        </Route>

        <Route exact path={pathFavor}>
          <Favorites userName={userName}/>
        </Route>

        <Route>
          <Page404 userName={userName} />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default App;
