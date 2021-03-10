import {AuthorizationStatus, avatarPlaceholder} from "../../const";
import {ActionType} from "../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userName: ``,
  avatarUrl: avatarPlaceholder,
  errorMessage: ``
};

const user = (state = initialState, action) => {
  switch (action.type) {
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

    case ActionType.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: String(action.payload)
      };

    default:
      return state;
  }
};

export {user};
