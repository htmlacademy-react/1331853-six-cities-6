import React from 'react';
import {PropTypes} from 'prop-types';
import {offersPropValid} from './offer-card/offer-card.prop';

import OfferCard from './offer-card/offer-card';

const OfferList = ({offers, mode, _currentSort}) => (
  offers.map((offer) => <OfferCard key={offer.id} {...offer} mode={mode}/>)
);

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropValid).isRequired).isRequired,
  mode: PropTypes.string.isRequired
};


export default React.memo(OfferList, (prevProps, nextProps) => {
  return prevProps.offers === nextProps.offers && prevProps.mode === nextProps.mode && prevProps._currentSort === nextProps._currentSort;
});


