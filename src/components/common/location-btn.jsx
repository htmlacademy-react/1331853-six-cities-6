import React from 'react';
import {PropTypes} from 'prop-types';

const LocationBtn = ({city}) => (
  <div className="locations__item">
    <a className="locations__item-link" href="#">
      <span>{city}</span>
    </a>
  </div>
);

LocationBtn.propTypes = {
  city: PropTypes.string.isRequired
};

export default LocationBtn;
