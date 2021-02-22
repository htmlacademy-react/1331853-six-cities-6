import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PropTypes from 'prop-types';
import {reviewsPropValid} from '../offer-property/review-list/review-item/review-item.prop';
import {offersPropValid} from './../offer-list/offer-card/offer-card.prop';

import Main from '../../pages/main/main';
import MainEmpty from '../../pages/main/empty/empty';
import OfferProperty from '../../pages/offer-property/offer-property';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import FavoritesEmpty from '../../pages/favorites/empty/empty';
import Page404 from '../../pages/page-404/page-404';

import {Routes} from './../../const';


const {MAIN: pathMain, MAIN_EMPTY: pathMainEmpty, OFFER: pathOffer, LOGIN: pathLogin, FAVOR: pathFavor, FAVOR_EMPTY: pathFavorEmpty} = Routes;

const App = ({offers, auth, userName, reviews, city}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const currentOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={pathMain}>
          <Main auth={auth} userName={userName} />
        </Route>

        <Route exact path={pathMainEmpty}>
          <MainEmpty auth={auth} userName={userName} />
        </Route>

        <Route exact path={pathOffer}>
          <OfferProperty auth={auth} userName={userName} offers={currentOffers} reviews={reviews} />
        </Route>

        <Route exact path={pathLogin}>
          <Login />
        </Route>

        <Route exact path={pathFavor}>
          <Favorites auth={auth} userName={userName} offers={favoriteOffers} />
        </Route>

        <Route exact path={pathFavorEmpty}>
          <FavoritesEmpty auth={auth} userName={userName} />
        </Route>

        <Route>
          <Page404 auth={auth} userName={userName} />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropValid).isRequired).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewsPropValid).isRequired).isRequired,
  city: PropTypes.string.isRequired
};

export default App;
