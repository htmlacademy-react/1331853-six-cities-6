export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  SET_ACTIVE_OFFER: `main/setActiveOffer`,
  REMOVE_ACTIVE_OFFER: `main/removeActiveOffer`,
  CHANGE_SORT: `main/changeSort`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`
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

  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  })
};
