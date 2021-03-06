import {ActionType} from "./action";
import {AuthorizationStatus, avatarPlaceholder, SORT_TYPES} from "../const";


const toggleCardFavor = (id, state) => {
  const currentOffers = state.offers;
  for (const offer of currentOffers) {
    if (offer.id === id) {
      offer.isFavorite = !offer.isFavorite;
    }
  }
};

const initialState = {
  city: `Paris`,
  offers: [],
  offerInteractedWith: false,
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
        isDataLoaded: true
      };

    case ActionType.TOGGLE_FAVOR:
      toggleCardFavor(action.payload, state);
      return {
        ...state,
        offerInteractedWith: true
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
