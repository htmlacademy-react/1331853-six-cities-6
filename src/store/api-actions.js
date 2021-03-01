import {ActionCreator} from "./action";
import {AuthorizationStatus} from './../const';
import {adaptToClient} from "./adapters";

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
  .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((offer)=> adaptToClient(offer)))))
);

export const fetchOpenedOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/` + id)
    .then(({data}) => dispatch(ActionCreator.setOpenOffer(adaptToClient(data))))
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
