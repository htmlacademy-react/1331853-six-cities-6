export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  SET_ACTIVE_OFFER: `main/setActiveOffer`,
  REMOVE_ACTIVE_OFFER: `main/removeActiveOffer`,
  CHANGE_SORT: `main/changeSort`,
  LOAD_OFFERS: `data/loadOffers`,
  SET_OPEN_OFFER: `data/setOpenOffer`,
  SET_NEARBY_OFFERS: `data/setNearbyOffers`,
  SET_CURRENT_REVIEWS: `data/setCurrentReviews`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_USER_NAME: `user/changeUserName`,
  REDIRECT_TO_ROUTE: `login/redirectToRoute`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  setActiveOffer: (id) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: id
  }),

  removeActiveOffer: () => ({
    type: ActionType.REMOVE_ACTIVE_OFFER
  }),

  changeSort: (currentSort) => ({
    type: ActionType.CHANGE_SORT,
    payload: currentSort
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),

  setOpenOffer: (offer) => ({
    type: ActionType.SET_OPEN_OFFER,
    payload: offer
  }),

  setNearbyOffers: (nearbyOffers) => ({
    type: ActionType.SET_NEARBY_OFFERS,
    payload: nearbyOffers
  }),

  setCurrentReviews: (currentReviews) => ({
    type: ActionType.SET_CURRENT_REVIEWS,
    payload: currentReviews
  }),

  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  changeUserName: (userName) => ({
    type: ActionType.CHANGE_USER_NAME,
    payload: userName
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  })
};
