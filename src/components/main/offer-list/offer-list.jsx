import React from 'react';
import {PropTypes} from 'prop-types';

import OfferCard from './offer-card/offer-card';
import {offersPropValid} from '../../../props-valid/props-valid';


const OfferList = ({offers}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} {...offer} />)}
    </div>
  );
};

export default OfferList;

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropValid).isRequired).isRequired
};
