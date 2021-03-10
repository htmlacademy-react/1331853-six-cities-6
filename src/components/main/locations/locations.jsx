import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {changeCity} from '../../../store/action';
import {CITY_LIST} from '../../../const';
import {getCity} from './../../../store/main/selectors';

const Locations = ({onChangeCity, city}) => {

  const menuClickHandler = (currentCity) => {
    onChangeCity(currentCity);
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

Locations.propTypes = {
  onChangeCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: getCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(changeCity(city));
  }
});


export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
