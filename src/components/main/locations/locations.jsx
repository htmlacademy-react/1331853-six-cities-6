import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {ActionCreator} from '../../../store/action';
import {CITY_LIST} from '../../../const';

const Locations = ({changeCity, getOffers, city}) => {

  const menuClickHandler = (currentCity) => {
    changeCity(currentCity);
    getOffers();
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list" >
        {CITY_LIST.map((item) => <li key={item} className="locations__item">
          <a className={`locations__item-link tabs__item ${item === city ? `tabs__item--active` : ``}`} href="#">
            <span onClick={() => menuClickHandler(item)}>{item}</span>
          </a>
        </li>)}
      </ul>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getOffers() {
    dispatch(ActionCreator.getOffers());
  },
});

const mapStateToProps = ({city}) => ({
  city
});

Locations.propTypes = {
  changeCity: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
