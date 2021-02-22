import React from 'react';

import PropTypes from 'prop-types';
import {offersPropValid} from '../../components/offer-list/offer-card/offer-card.prop';

import Header from '../../components/header/header';
import Locations from '../../components/main/locations/locations';
import OfferList from '../../components/offer-list/offer-list';

import Map from '../../components/map/map';
import {connect} from 'react-redux';

const Main = ({offers, auth, userName, city}) => {
  return (
    <>
      <div className="page page--gray page--main">
        <Header auth={auth} userName={userName} />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Locations />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <OfferList offers={offers} mode="MAIN" />
                </div>
              </section>
              <div className="cities__right-section">
                <Map offers={offers} mode="MAIN"/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};


Main.propTypes = {
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropValid).isRequired).isRequired,
  city: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city
});

export {Main};
export default connect(mapStateToProps, null)(Main);
