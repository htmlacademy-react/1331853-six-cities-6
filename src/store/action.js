export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  SET_ACTIVE_OFFER: `main/setActiveOffer`,
  REMOVE_ACTIVE_OFFER: `main/removeActiveOffer`,
  CHANGE_SORT: `main/changeSort`,
  LOAD_OFFERS: `data/loadOffers`,
  TOGGLE_FAVOR: `data/toggleFavor`,
  TOGGLE_OPENED_CARD_FAVOR: `data/toggleOpenedCardFavor`,
  SET_OPEN_OFFER: `data/setOpenOffer`,
  SET_NEARBY_OFFERS: `data/setNearbyOffers`,
  SET_CURRENT_REVIEWS: `data/setCurrentReviews`,
  SET_FAVORITE_LIST: `data/setFavoriteList`,
  ADD_CARD_TO_FAVORITE_LIST: `data/addCardToFavoriteList`,
  REMOVE_CARD_FROM_FAVORITE_LIST: `data/removeCardFromFavoriteList`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_USER_NAME: `user/changeUserName`,
  CHANGE_USER_AVATAR: `user/changeUserAvatar`,
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

  toggleFavor: (offerId) => ({
    type: ActionType.TOGGLE_FAVOR,
    payload: offerId
  }),

  toggleOpenedCardFavor: () => ({
    type: ActionType.TOGGLE_OPENED_CARD_FAVOR
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

  setFavoriteList: (favoriteList) => ({
    type: ActionType.SET_FAVORITE_LIST,
    payload: favoriteList
  }),

  addCardToFavoriteList: (newFavoriteOffer) => ({
    type: ActionType.ADD_CARD_TO_FAVORITE_LIST,
    payload: newFavoriteOffer
  }),

  removeCardFromFavoriteList: (id) => ({
    type: ActionType.REMOVE_CARD_FROM_FAVORITE_LIST,
    payload: id
  }),


  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  changeUserName: (userName) => ({
    type: ActionType.CHANGE_USER_NAME,
    payload: userName
  }),


  changeUserAvatar: (avatarUrl) => ({
    type: ActionType.CHANGE_USER_AVATAR,
    payload: avatarUrl
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  })
};
