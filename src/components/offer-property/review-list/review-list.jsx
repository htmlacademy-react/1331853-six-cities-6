import React from 'react';
import {PropTypes} from 'prop-types';

import {reviewsPropValid} from '../../../props-valid/props-valid';
import ReviewItem from './review-item/review-item';


const ReviewList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {
        reviews.map((review, i) => <ReviewItem key={i + review.id} review={review}/>)
      }
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewsPropValid).isRequired).isRequired,
};

export default ReviewList;
