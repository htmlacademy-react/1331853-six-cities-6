import {ActionType} from "../action";

const getItemIndex = (list, id) => {
  const idList = list.map((item) => item.id);
  return idList.indexOf(id);
};

const toggleCardFavor = (offer, currentOfferList) => {
  const cardIndex = getItemIndex(currentOfferList, offer.id);
  return (
    [...currentOfferList.slice(0, cardIndex), offer, ...currentOfferList.slice((cardIndex + 1), currentOfferList.length)]
  );
};

const addCardToFavoriteList = (newFavoriteOffer, currentFavoriteList) => {
  return [...currentFavoriteList, newFavoriteOffer];
};


const removeCardFromFavoriteList = (offerId, currentFavoriteList) => {
  const cardIndex = getItemIndex(currentFavoriteList, offerId);
  return (
    [...currentFavoriteList.slice(0, cardIndex), ...currentFavoriteList.slice((cardIndex + 1), currentFavoriteList.length)]
  );
};

const initialState = {
  offers: [],
  isDataLoaded: false,
  openedOffer: {},
  nearbyOffers: false,
  currentReviews: false,
  reviewLoadingStatus: ``,
  favoriteList: [],
  isFavoriteListLoaded: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };

    case ActionType.TOGGLE_FAVOR:
      return {
        ...state,
        offers: toggleCardFavor(action.payload, state.offers),
      };

    case ActionType.TOGGLE_OPENED_CARD_FAVOR:
      return {
        ...state,
        openedOffer: Object.assign({}, state.openedOffer, {isFavorite: !state.openedOffer.isFavorite})
      };

    case ActionType.SET_OPEN_OFFER:
      return {
        ...state,
        openedOffer: action.payload,
      };

    case ActionType.SET_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload,
      };

    case ActionType.SET_CURRENT_REVIEWS:
      return {
        ...state,
        currentReviews: action.payload,
      };

    case ActionType.SET_LOADING_REVIEW_STATUS:
      return {
        ...state,
        reviewLoadingStatus: action.payload,
      };

    case ActionType.SET_FAVORITE_LIST:
      return {
        ...state,
        favoriteList: action.payload,
        isFavoriteListLoaded: true
      };

    case ActionType.ADD_CARD_TO_FAVORITE_LIST:
      return {
        ...state,
        favoriteList: addCardToFavoriteList(action.payload, state.favoriteList),
      };

    case ActionType.REMOVE_CARD_FROM_FAVORITE_LIST:
      return {
        ...state,
        favoriteList: removeCardFromFavoriteList(action.payload, state.favoriteList),
      };


    default:
      return state;
  }
};

export {data};
