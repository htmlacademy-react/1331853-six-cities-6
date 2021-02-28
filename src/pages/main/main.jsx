import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import {offersPropValid} from '../../components/offer-list/offer-card/offer-card.prop';

import Header from '../../components/header/header';
import Locations from '../../components/main/locations/locations';
import OfferList from '../../components/offer-list/offer-list';
import Sort from '../../components/main/sort/sort';
import Map from '../../components/map/map';
import MainEmpty from './empty/empty';

import {getOffers, getSortedOffers} from '../../utils';
import {SORT_TEXTS} from '../../const';
import {fetchOfferList} from '../../store/api-actions';
import Loading from '../../components/loading/loading';

const Main = ({offers, userName, city, currentSort, isDataLoaded, onLoadData}) => {
  const currentOffers = getOffers(city, offers);
  const sortedOffers = getSortedOffers(currentSort, currentOffers);

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <Loading />
    );
  }
  return (
    <>
      <div className="page page--gray page--main">
        <Header userName={userName} />
        <main className={`page__main page__main--index ${!currentOffers.length ? `page__main--index-empty` : ``}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Locations />
          </div>
          {currentOffers.length ?
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOffers.length} places to stay in {city}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by </span>
                    <span className="places__sorting-type" tabIndex={0}>
                      {SORT_TEXTS[currentSort]}
                      <svg className="places__sorting-arrow" width={7} height={4}>
                        <use xlinkHref="#icon-arrow-select" />
                      </svg>
                    </span>
                    <Sort />
                  </form>
                  <div className="cities__places-list places__list tabs__content">
                    <OfferList offers={sortedOffers} mode="MAIN" />
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map offers={currentOffers} city={city} mode="MAIN"/>
                </div>
              </div>
            </div>

            : <MainEmpty userName={userName} city={city}/>
          }
        </main>
      </div>
    </>
  );
};


Main.propTypes = {
  userName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropValid).isRequired).isRequired,
  city: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = ({city, offers, currentSort, isDataLoaded}) => ({
  offers,
  city,
  currentSort,
  isDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOfferList());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
