export const Routes = {
  MAIN: `/`,
  MAIN_EMPTY: `/dev-main-empty`,
  OFFER: `/offer/:id`,
  LOGIN: `/login`,
  FAVOR: `/favorites`,
  FAVOR_EMPTY: `/dev-favorites-empty`
};

export const CARD_CLASS_NAME = {
  MAIN: {
    article: `cities__place-card`,
    image: `cities__image-wrapper`
  },
  OFFER: {
    article: `near-places__card`,
    image: `near-places__image-wrapper`
  },
  FAVOR: {
    article: `favorites__card`,
    image: `favorites__image-wrapper`,
    info: `favorites__card-info`
  }
};

export const MAP_CLASS_NAME = {
  MAIN: `cities__map`,
  OFFER: `property__map`
};

export const CITY_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
export const STAR_LIST = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

export const SORT_TYPES = {
  POPULAR: `popular`,
  LOW_PRICE: `low-price`,
  HIGH_PRICE: `high-price`,
  TOP_RATED: `top-rated`
};

export const SORT_LIST = [
  {
    text: `Popular`,
    type: SORT_TYPES.POPULAR
  },
  {
    text: `Price: low to high`,
    type: SORT_TYPES.LOW_PRICE
  },
  {
    text: `Price: high to low`,
    type: SORT_TYPES.HIGH_PRICE
  },
  {
    text: `Top rated first`,
    type: SORT_TYPES.TOP_RATED
  },
];
