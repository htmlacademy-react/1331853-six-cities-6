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

export const CITY_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
export const STAR_LIST = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

