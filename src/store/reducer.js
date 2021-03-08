import {ActionType} from "./action";
import {AuthorizationStatus, avatarPlaceholder, SORT_TYPES} from "../const";


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
  city: `Paris`,
  offers: [],
  activeOffer: false,
  currentSort: SORT_TYPES.POPULAR,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  openedOffer: {},
  nearbyOffers: [],
  currentReviews: [],
  favoriteList: [],
  isFavoriteListLoaded: false,
  userName: ``,
  avatarUrl: avatarPlaceholder
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };

    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload
      };

    case ActionType.REMOVE_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: false
      };

    case ActionType.CHANGE_SORT:
      return {
        ...state,
        currentSort: action.payload
      };

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


    case ActionType.REMOVE_INTERACTED_OFFER:
      return {
        ...state,
        offerInteractedWith: false
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

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    case ActionType.CHANGE_USER_NAME:
      return {
        ...state,
        userName: action.payload
      };

    case ActionType.CHANGE_USER_AVATAR:
      return {
        ...state,
        avatarUrl: action.payload
      };

    default:
      return state;
  }
};

export {reducer};
