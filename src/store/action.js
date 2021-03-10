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
  SET_LOADING_REVIEW_STATUS: `data/setLoadingReviewStatus`,
  SET_FAVORITE_LIST: `data/setFavoriteList`,
  ADD_CARD_TO_FAVORITE_LIST: `data/addCardToFavoriteList`,
  REMOVE_CARD_FROM_FAVORITE_LIST: `data/removeCardFromFavoriteList`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_USER_NAME: `user/changeUserName`,
  CHANGE_USER_AVATAR: `user/changeUserAvatar`,
  REDIRECT_TO_ROUTE: `login/redirectToRoute`,
  SET_ERROR_MESSAGE: `error/setErrorMessage`
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city
});

export const setActiveOffer = (id) => ({
  type: ActionType.SET_ACTIVE_OFFER,
  payload: id
});

export const removeActiveOffer = () => ({
  type: ActionType.REMOVE_ACTIVE_OFFER
});

export const changeSort = (currentSort) => ({
  type: ActionType.CHANGE_SORT,
  payload: currentSort
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const toggleFavor = (offerId) => ({
  type: ActionType.TOGGLE_FAVOR,
  payload: offerId
});

export const toggleOpenedCardFavor = () => ({
  type: ActionType.TOGGLE_OPENED_CARD_FAVOR
});

export const setOpenOffer = (offer) => ({
  type: ActionType.SET_OPEN_OFFER,
  payload: offer
});

export const setNearbyOffers = (nearbyOffers) => ({
  type: ActionType.SET_NEARBY_OFFERS,
  payload: nearbyOffers
});

export const setCurrentReviews = (currentReviews) => ({
  type: ActionType.SET_CURRENT_REVIEWS,
  payload: currentReviews
});

export const setLoadingReviewStatus = (status) => ({
  type: ActionType.SET_LOADING_REVIEW_STATUS,
  payload: status
});

export const setFavoriteList = (favoriteList) => ({
  type: ActionType.SET_FAVORITE_LIST,
  payload: favoriteList
});

export const addCardToFavoriteList = (newFavoriteOffer) => ({
  type: ActionType.ADD_CARD_TO_FAVORITE_LIST,
  payload: newFavoriteOffer
});

export const removeCardFromFavoriteList = (id) => ({
  type: ActionType.REMOVE_CARD_FROM_FAVORITE_LIST,
  payload: id
});


export const requiredAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const changeUserName = (userName) => ({
  type: ActionType.CHANGE_USER_NAME,
  payload: userName
});


export const changeUserAvatar = (avatarUrl) => ({
  type: ActionType.CHANGE_USER_AVATAR,
  payload: avatarUrl
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const setErrorMessage = (message) => ({
  type: ActionType.SET_ERROR_MESSAGE,
  payload: message
});
