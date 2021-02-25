export const ActionType = {
  CHANGE_CITY: `changeCity`,
  SET_ACTIVE_OFFER: `setActiveOffer`,
  REMOVE_ACTIVE_OFFER: `removeActiveOffer`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  setActiveOffer: (id) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: id
  }),
  removeActiveOffer: () => ({
    type: ActionType.REMOVE_ACTIVE_OFFER
  })
};
