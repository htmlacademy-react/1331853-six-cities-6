import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../components/header/header';
import Locations from '../../components/main/locations/locations';
import OfferList from '../../components/offer-list/offer-list';
import Sort from '../../components/main/sort/sort';
import Map from '../../components/map/map';
import MainEmpty from './empty/empty';
import Toast from '../../components/toast/toast';
import Loading from '../../components/loading/loading';

import {fetchOfferList} from '../../store/api-actions';
import {getCurrentOffers, getSortedOffers} from '../../store/selectors';
import {setActiveOffer, setOpenOffer} from '../../store/action';

const Main = () => {
  const {city} = useSelector((state) => state.MAIN);
  const {isDataLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const currentOffers = useSelector(getCurrentOffers);
  const sortedOffers = useSelector(getSortedOffers);
  const cardSectionRef = useRef();

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchOfferList());
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (isDataLoaded) {
      cardSectionRef.current.scrollTop = 0;
      dispatch(setActiveOffer(``));
      dispatch(setOpenOffer({}));
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
                    <OfferList offers={sortedOffers} mode="MAIN"/>
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

export default Main;
