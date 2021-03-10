import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import {offersPropValid} from '../../components/offer-list/offer-card/offer-card.prop';

import Header from '../../components/header/header';
import Locations from '../../components/main/locations/locations';
import OfferList from '../../components/offer-list/offer-list';
import Sort from '../../components/main/sort/sort';
import Map from '../../components/map/map';
import MainEmpty from './empty/empty';
import Toast from '../../components/toast/toast';
import Loading from '../../components/loading/loading';

import {getCurrentOffers, getSortedOffers} from '../../utils';

import {fetchOfferList} from '../../store/api-actions';
import {getLoadedDataStatus, getOffers} from './../../store/data/selectors';
import {getCity, getCurrentSort} from '../../store/main/selectors';

const Main = ({offers, city, currentSort, isDataLoaded, onLoadData}) => {
  const currentOffers = getCurrentOffers(city, offers);
  const sortedOffers = getSortedOffers(currentSort, currentOffers);

  const cardSectionRef = useRef();

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (isDataLoaded) {
      cardSectionRef.current.scrollTop = 0;
    }
  }, [city]);

  if (!isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <div className="page page--gray page--main">
        <Toast />
        <Header />
        <main className={`page__main page__main--index ${!currentOffers.length ? `page__main--index-empty` : ``}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Locations />
          </div>
          {currentOffers.length ?
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places" ref={cardSectionRef}>
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOffers.length} places to stay in {city}</b>
                  <Sort />
                  <div className="cities__places-list places__list tabs__content">
                    <OfferList offers={sortedOffers} mode="MAIN" />
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map offers={currentOffers} city={city} mode="MAIN"/>
                </div>
              </div>
            </div>

            : <MainEmpty city={city}/>
          }
        </main>
      </div>
    </>
  );
};


Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropValid).isRequired).isRequired,
  city: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  city: getCity(state),
  currentSort: getCurrentSort(state),
  isDataLoaded: getLoadedDataStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOfferList());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
