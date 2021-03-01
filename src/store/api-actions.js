import {ActionCreator} from "./action";
import {AuthorizationStatus} from './../const';
import {adaptOfferToClient, adaptReviewsToClient} from "./adapters";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((offer)=> adaptOfferToClient(offer)))))
);

export const fetchOpenedOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.setOpenOffer(adaptOfferToClient(data))))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.setNearbyOffers(data.map((offer) => adaptOfferToClient(offer)))))
);

export const fetchCurrentReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.setCurrentReviews(data.map((offer) => adaptReviewsToClient(offer)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() =>
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH))
    )
  .catch(()=> {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() =>
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH))
    )
);
