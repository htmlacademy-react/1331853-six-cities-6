import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {ActionCreator} from '../../../store/action';
import {CITY_LIST} from '../../../const';

const Locations = ({changeCity, city}) => {

  const menuClickHandler = (currentCity) => {
    changeCity(currentCity);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list" >
        {CITY_LIST.map((item) => <li key={item} className="locations__item">
          <a className={`locations__item-link tabs__item ${item === city ? `tabs__item--active` : ``}`} >
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
  }
});

const mapStateToProps = ({city}) => ({
  city
});

Locations.propTypes = {
  changeCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
