import {ActionCreator} from "./action";
import {APIRoute, AuthorizationStatus, avatarPlaceholder, HttpCode, LOCAL_STORE_KEYS, Routes, ReviewLoadingStatus} from './../const';
import {adaptOfferToClient, adaptReviewsToClient} from "./adapters";
import {sortDate} from "../utils";
import Store from "./local-store";

const STORE_AUTH_PREFIX = `sixcities-auth-localstorage`;
const STORE_VER = `v1`;
const STORE_AUTH_NAME = `${STORE_AUTH_PREFIX}-${STORE_VER}`;

const localStore = new Store(STORE_AUTH_NAME, window.localStorage);


export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
  .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((offer)=> adaptOfferToClient(offer)))))
);

export const fetchOpenedOfferData = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`${APIRoute.HOTELS}/${id}`),
    api.get(`${APIRoute.HOTELS}/${id}/nearby`),
    api.get(`${APIRoute.COMMENTS }/${id}`)
  ])
    .then(([offer, nearby, comments]) => {
      const sortedComments = comments.data.sort(sortDate);
      dispatch(ActionCreator.setOpenOffer(adaptOfferToClient(offer.data)));
      dispatch(ActionCreator.setNearbyOffers(nearby.data.map((nearbyOffer) => adaptOfferToClient(nearbyOffer))));
      dispatch(ActionCreator.setCurrentReviews(sortedComments.map((comment) => adaptReviewsToClient(comment))));
    })
    .catch((err) => {
      const {response} = err;
      switch (response.status) {
        case HttpCode.NOT_FOUND:
          dispatch(ActionCreator.redirectToRoute(Routes.NOT_FOUND));
          break;

        default:
          dispatch(ActionCreator.setErrorMessage(response.status));
          break;
      }
    })
);

export const fetchFavoriteList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVOR)
  .then(({data}) => dispatch(ActionCreator.setFavoriteList(data.map((offer)=> adaptOfferToClient(offer)))))
);

export const toggleFavorOnServer = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVOR}/${id}/${status}`)
    .then(({data}) => {
      const adaptedOffer = adaptOfferToClient(data);
      dispatch(ActionCreator.toggleFavor(adaptedOffer));

      if (status) {
        dispatch(ActionCreator.addCardToFavoriteList(adaptedOffer));
      } else {
        dispatch(ActionCreator.removeCardFromFavoriteList(adaptedOffer.id));
      }

    })
    .catch((err) => {
      const {response} = err;
      switch (response.status) {
        case HttpCode.UNAUTHORIZED:
          dispatch(ActionCreator.redirectToRoute(Routes.LOGIN));
          dispatch(ActionCreator.changeUserAvatar(avatarPlaceholder));
          localStore.removeItem(LOCAL_STORE_KEYS.AUTH);
          localStore.removeItem(LOCAL_STORE_KEYS.EMAIL);
          localStore.removeItem(LOCAL_STORE_KEYS.AVATAR_URL);
          break;

        default:
          dispatch(ActionCreator.setErrorMessage(response.status));
          break;
      }
    })
);

export const submitComment = (id, {review: comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => {
      const sortedComments = data.sort(sortDate);
      dispatch(ActionCreator.setCurrentReviews(sortedComments.map((item) => adaptReviewsToClient(item))));
      dispatch(ActionCreator.setLoadingReviewStatus(ReviewLoadingStatus.LOADED));
    })
    .catch((err) => {
      const {response} = err;
      switch (response.status) {
        case HttpCode.UNAUTHORIZED:
          dispatch(ActionCreator.redirectToRoute(Routes.LOGIN));
          dispatch(ActionCreator.changeUserAvatar(avatarPlaceholder));
          localStore.removeItem(LOCAL_STORE_KEYS.AUTH);
          localStore.removeItem(LOCAL_STORE_KEYS.EMAIL);
          localStore.removeItem(LOCAL_STORE_KEYS.AVATAR_URL);
          break;

        default:
          dispatch(ActionCreator.setErrorMessage(response.status));
          dispatch(ActionCreator.setLoadingReviewStatus(ReviewLoadingStatus.LOADING_FAILED));
          break;
      }
    })
);

export const checkAuth = () => (dispatch, _getState, api) => {
  const {authorizationStatus, email, avatarUrl} = localStore.getItems();

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
    dispatch(ActionCreator.changeUserName(email));
    dispatch(ActionCreator.changeUserAvatar(avatarUrl));
    return;
  }

  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.changeUserName(data.email));
      dispatch(ActionCreator.changeUserAvatar(data[`avatar_url`]));
    })
    .catch(()=> {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.changeUserName(email));
      dispatch(ActionCreator.changeUserAvatar(data[`avatar_url`]));

      localStore.setItem(LOCAL_STORE_KEYS.AUTH, AuthorizationStatus.AUTH);
      localStore.setItem(LOCAL_STORE_KEYS.EMAIL, email);
      localStore.setItem(LOCAL_STORE_KEYS.AVATAR_URL, data[`avatar_url`]);
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(Routes.MAIN)))
    .catch(({response}) => {
      dispatch(ActionCreator.setErrorMessage(response.status));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => {
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(ActionCreator.changeUserAvatar(avatarPlaceholder));

      localStore.removeItem(LOCAL_STORE_KEYS.AUTH);
      localStore.removeItem(LOCAL_STORE_KEYS.EMAIL);
      localStore.removeItem(LOCAL_STORE_KEYS.AVATAR_URL);
    })
    .catch(({response}) => {
      dispatch(ActionCreator.setErrorMessage(response.status));
    })
);
