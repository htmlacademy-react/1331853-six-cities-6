import {Routes, SORT_TYPES, STAR_LIST} from "./const";

export const getRatingCount = (rating) => {
  const roundedRating = Math.round(rating);
  return 100 / STAR_LIST.length * roundedRating;
};
export const sortDate = (a, b) => (
  Date.parse(a.date) - Date.parse(b.date)
);

export const getOfferPath = (id) => Routes.OFFER.replace(/id/, id);

export const getCurrentOffers = (city, offers) => (
  offers.filter((offer) => offer.city.name === city)
);

export const getSortedOffers = (currentSort, offers) => {
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
};
