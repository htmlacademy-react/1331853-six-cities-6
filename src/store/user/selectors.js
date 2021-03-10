import {NameSpace} from "../root-reducer";

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserName = (state) => state[NameSpace.USER].userName;
export const getAvatarUrl = (state) => state[NameSpace.USER].avatarUrl;
export const getErrorMessage = (state) => state[NameSpace.USER].errorMessage;
