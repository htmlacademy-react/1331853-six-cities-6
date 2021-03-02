import {ActionType} from "./action";
import {AuthorizationStatus, SORT_TYPES} from "../const";


const initialState = {
  city: `Paris`,
  offers: [],
  activeOffer: false,
  currentSort: SORT_TYPES.POPULAR,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  openedOffer: {},
  nearbyOffers: [],
  currentReviews: []
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
        isDataLoaded: true
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

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    default:
      return state;
  }
};

export {reducer};
