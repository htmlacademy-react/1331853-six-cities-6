import {ActionCreator} from "./action";
import {APIRoute, AuthorizationStatus, Routes} from './../const';
import {adaptOfferToClient, adaptReviewsToClient} from "./adapters";
import {sortDate} from "../utils";

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
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() =>
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH))
    )
  .catch(()=> {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => {
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.changeUserName(email));
    })
  .then(()=> dispatch(ActionCreator.redirectToRoute(Routes.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => {
      dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH));
    })
);
