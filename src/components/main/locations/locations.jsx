import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {ActionCreator} from '../../../store/action';
import {CITY_LIST} from '../../../const';

const Locations = ({changeCity, getOffers}) => {
  const menuClickHandler = (evt) => {
    if (evt.target.tagName === `SPAN`) {
      changeCity(evt.target.textContent);
      getOffers();
    }
  };
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list" onClick={(evt) => menuClickHandler(evt)}>
        {CITY_LIST.map((city) => <li key={city} className="locations__item">
          <a className={`locations__item-link tabs__item ${city === `Paris` ? `tabs__item--active` : ``}`} href="#">
            <span>{city}</span>
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

Locations.propTypes = {
  changeCity: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
};

export {Locations};
export default connect(null, mapDispatchToProps)(Locations);
