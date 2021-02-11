import React from 'react';
import {PropTypes} from 'prop-types';

import PlaceCard from './place-card/place-card';
import {offersPropValid} from '../../../props-valid/props-valid';


const PlaceList = ({offers}) => (
  <div className="cities__places-list places__list tabs__content">
    {
      offers.map((offer, i) => <PlaceCard key={i} offer={offer} />)
    }
  </div>
);

export default PlaceList;

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropValid).isRequired).isRequired
};
