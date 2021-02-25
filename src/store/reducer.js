import {offers} from "../mocks/offers";
import {ActionType} from "./action";

const initialState = {
  city: `Paris`,
  offers,
  activeOffer: false
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
    default:
      return state;
  }
};

export {reducer};
