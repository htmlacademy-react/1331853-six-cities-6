import React from 'react';
import PropTypes from 'prop-types';

const Star = ({digit, title}) => (
  <>
    <input className="form__rating-input visually-hidden" name="rating" defaultValue={digit} id={digit + `-stars`} type="radio" />
    <label htmlFor={digit + `-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width={37} height={33}>
        <use xlinkHref="#icon-star" />
      </svg>
    </label>
  </>
);

Star.propTypes = {
  digit: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};
export default Star;
