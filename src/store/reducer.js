import {ActionType} from "./action";
import {AuthorizationStatus, avatarPlaceholder, SORT_TYPES} from "../const";


const toggleCardFavor = (offer, {offers, idToIndexMap}) => {
  const currentOfferId = idToIndexMap[offer.id];
  const firstRange = currentOfferId ? currentOfferId - 1 : currentOfferId;
  return (
    [...offers.slice(0, firstRange), offer, ...offers.slice((currentOfferId + 1), offers.length)]
  );
};

const createOffersMap = (offers) => {
  const offersMap = {};

  for (let i = 0; i < offers.length; i++) {

    const offerId = offers[i].id;
    offersMap[offerId] = i;
  }
  return offersMap;
};

const initialState = {
  city: `Paris`,
  offers: [],
  idToIndexMap: {},
  activeOffer: false,
  currentSort: SORT_TYPES.POPULAR,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  openedOffer: {},
  nearbyOffers: [],
  currentReviews: [],
  favoriteList: false,
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
        idToIndexMap: createOffersMap(action.payload),
      };

    case ActionType.TOGGLE_FAVOR:
      return {
        ...state,
        offers: toggleCardFavor(action.payload, state),
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
