import React from 'react';
import {PropTypes} from 'prop-types';
import {offersPropValid} from './offer-card/offer-card.prop';

import OfferCard from './offer-card/offer-card';


const OfferList = ({offers, path}) => (
  offers.map((offer) => <OfferCard key={offer.id} {...offer} path={path}/>)
);

export default OfferList;

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropValid).isRequired).isRequired,
  path: PropTypes.string.isRequired
};
