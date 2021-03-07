import React, {useEffect} from 'react';

import PropTypes from 'prop-types';
import {offersPropValid} from '../../components/offer-list/offer-card/offer-card.prop';

import LocationBtn from '../../components/common/location-btn';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import OfferList from '../../components/offer-list/offer-list';
import {connect} from 'react-redux';
import FavoritesEmpty from './empty/empty';
import {getOffers} from '../../utils';
import {ActionCreator} from '../../store/action';
import {fetchFavoriteList} from './../../store/api-actions';
import Loading from '../../components/loading/loading';


const Favorites = ({favoriteList, changeCity, setFavoriteList, isFavoriteListLoaded}) => {

  useEffect(() => {
    if (!isFavoriteListLoaded) {
      setFavoriteList();
    }
  }, [isFavoriteListLoaded]);

  if (!isFavoriteListLoaded) {
    return (
      <Loading />
    );
  }

  const cityList = [...new Set(favoriteList.map((offer) => offer.city.name))];

  const cardClickHandler = (city) => {
    changeCity(city);
  };

  return (
    <>
      {
        favoriteList.length ?
          <div className="page">
            <Header />
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    {
                      cityList.map((city) => (
                        <li key={city} className="favorites__locations-items" onClick={() => cardClickHandler(city)}>

                          <div className="favorites__locations locations locations--current">
                            <LocationBtn city={city}/>
                          </div>

                          <div className="favorites__places">
                            <OfferList offers={getOffers(city, favoriteList)} mode="FAVOR"/>
                          </div>

                        </li>
                      ))
                    }
                  </ul>
                </section>
              </div>
            </main>
            <Footer />
          </div>

          : <FavoritesEmpty />
      }

    </>

  );
};

Favorites.propTypes = {
  favoriteList: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(offersPropValid)), PropTypes.array]).isRequired,
  isFavoriteListLoaded: PropTypes.bool.isRequired,
  changeCity: PropTypes.func.isRequired,
  setFavoriteList: PropTypes.func.isRequired
};

const mapStateToProps = ({favoriteList, isFavoriteListLoaded}) => ({
  favoriteList,
  isFavoriteListLoaded
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  setFavoriteList() {
    dispatch(fetchFavoriteList());
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
