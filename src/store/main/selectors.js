import {NameSpace} from "../root-reducer";

export const getCity = (state) => state[NameSpace.MAIN].city;
export const getActiveOffer = (state) => state[NameSpace.MAIN].activeOffer;
export const getCurrentSort = (state) => state[NameSpace.MAIN].currentSort;
