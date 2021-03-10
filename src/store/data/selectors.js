import {NameSpace} from "../root-reducer";

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getOpenedOffer = (state) => state[NameSpace.DATA].openedOffer;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getCurrentReviews = (state) => state[NameSpace.DATA].currentReviews;
export const getReviewLoadingStatus = (state) => state[NameSpace.DATA].reviewLoadingStatus;
export const getFavoriteList = (state) => state[NameSpace.DATA].favoriteList;
export const getLoadedFavoriteListStatus = (state) => state[NameSpace.DATA].isFavoriteListLoaded;
