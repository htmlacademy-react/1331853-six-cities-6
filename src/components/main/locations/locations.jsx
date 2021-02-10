import React from 'react';
import {CITY_LIST} from '../../../const';

const Locations = () => (
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
);

export default Locations;
