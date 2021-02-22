import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

import {ActionCreator} from '../../../store/action';
import {CITY_LIST} from '../../../const';

const Locations = ({changeCity, getOffers, city}) => {
  const locationList = useRef();

  const removeClass = () => {
    const list = locationList.current.children;

    for (const item of list) {
      const link = item.lastChild;

      if (link.classList.contains(`tabs__item--active`)) {
        link.classList.remove(`tabs__item--active`);
        return;
      }
    }
  };

  const menuClickHandler = (evt) => {
    const currentEl = evt.target;
    if (currentEl.tagName === `SPAN`) {
      changeCity(evt.target.textContent);
      getOffers();
      removeClass();
      currentEl.parentElement.classList.add(`tabs__item--active`);
    }
  };
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list" onClick={(evt) => menuClickHandler(evt)} ref={locationList}>
        {CITY_LIST.map((item) => <li key={item} className="locations__item">
          <a className={`locations__item-link tabs__item ${item === city ? `tabs__item--active` : ``}`} href="#">
            <span>{item}</span>
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

const mapStateToProps = (state) => ({
  city: state.city
});

Locations.propTypes = {
  changeCity: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
