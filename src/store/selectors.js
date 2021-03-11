import {createSelector} from 'reselect';
import {NameSpace} from './root-reducer';

import {SORT_TYPES} from '../const';

const getOffers = (state) => state[NameSpace.DATA].offers;
const getCity = (state) => state[NameSpace.MAIN].city;
const getSort = (state) => state[NameSpace.MAIN].currentSort;

export const getCurrentOffers = createSelector(
    [getOffers, getCity],
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getSortedOffers = createSelector(
    [getCurrentOffers, getSort],
    (offers, currentSort) => {
      switch (currentSort) {
        case SORT_TYPES.LOW_PRICE:
          return offers.sort((a, b) => a.price - b.price);
        case SORT_TYPES.HIGH_PRICE:
          return offers.sort((a, b) => b.price - a.price);
        case SORT_TYPES.TOP_RATED:
          return offers.sort((a, b) => b.rating - a.rating);
        default:
          return offers;
      }
    }
);
