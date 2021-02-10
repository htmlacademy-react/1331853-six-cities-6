import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../../components/main/place-card/place-card';
import Header from '../../components/header/header';
import {CITY_LIST} from '../../const';

const Main = ({offersCount, places, auth, userName}) => (
  <>
    <div className="page page--gray page--main">
      <Header auth={auth} userName={userName}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                CITY_LIST.map((city, i) =>
                  <li key={city + i} className={`locations__item` /* tabs__item--active Этот класс отвечает за активную ссылку в меню. Его реализацию добавлю позже*/}>
                    <a className="locations__item-link tabs__item" href="#">
                      <span>{city}</span>
                    </a>
                  </li>)
              }
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
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
                {
                  places.map(({type, img, price}, i) => <PlaceCard key={type + i} type={type} img={img} price={price} />)
                }
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
);

Main.propTypes = {
  offersCount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

export default Main;
