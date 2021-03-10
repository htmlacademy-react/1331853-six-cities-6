import React, {useEffect, useRef, useState} from 'react';
import Star from './star/star';
import {STAR_LIST, ReviewValid, ReviewLoadingStatus} from '../../../const';
import {connect} from 'react-redux';
import {submitComment} from '../../../store/api-actions';
import {PropTypes} from 'prop-types';
import {offersPropValid} from './../../offer-list/offer-card/offer-card.prop';
import {setLoadingReviewStatus} from '../../../store/action';
import {getOpenedOffer, getReviewLoadingStatus} from './../../../store/data/selectors';

const UserReview = ({openedOffer, submitCommentOnServer, reviewLoadingStatus, onSetLoadingReviewStatus}) => {
  const submitButtonRef = useRef();
  const commentRef = useRef();
  const formRef = useRef();

  const [userReview, setUserReview] = useState({rating: 0, review: ``});
  const {review, rating} = userReview;

  const {MAX_LENGTH: maxLength, MIN_LENGTH: minLength} = ReviewValid;

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    submitCommentOnServer(openedOffer.id, {review, rating});
    onSetLoadingReviewStatus(ReviewLoadingStatus.LOADING);
  };

  const formChangeHandler = (evt) => {
    if (evt.target.name === `rating`) {
      setUserReview({...userReview, rating: evt.target.value});
    } else {
      setUserReview({...userReview, review: evt.target.value});
    }
  };

  useEffect(() => {
    submitButtonRef.current.disabled = !(rating && review.length > minLength && review.length < maxLength);
  }, [review, rating]);

  useEffect(() => {
    switch (reviewLoadingStatus) {
      case ReviewLoadingStatus.LOADING:
        submitButtonRef.current.disabled = true;
        commentRef.current.disabled = true;
        break;

      case ReviewLoadingStatus.LOADED:
        commentRef.current.disabled = false;
        formRef.current.reset();
        setUserReview({review: ``, rating: 0});
        onSetLoadingReviewStatus(``);
        break;

      case ReviewLoadingStatus.LOADING_FAILED:
        submitButtonRef.current.disabled = false;
        commentRef.current.disabled = false;
        onSetLoadingReviewStatus(``);
        break;

      default:
        break;
    }
  }, [reviewLoadingStatus]);

  return (
    <form className="reviews__form form" action="#" method="post" onChange={(evt) => formChangeHandler(evt)} onSubmit={(evt) => formSubmitHandler(evt)} ref={formRef}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          STAR_LIST.map((item, i) => <Star key={item + i} digit={STAR_LIST.length - i} title={item} isDisabled={reviewLoadingStatus === ReviewLoadingStatus.LOADING}/>)
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} ref={commentRef} required maxLength={maxLength} minLength={minLength} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled ref={submitButtonRef}>Submit</button>
      </div>
    </form>
  );
};

UserReview.propTypes = {
  openedOffer: PropTypes.shape(offersPropValid).isRequired,
  reviewLoadingStatus: PropTypes.string.isRequired,
  submitCommentOnServer: PropTypes.func.isRequired,
  onSetLoadingReviewStatus: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  submitCommentOnServer(id, review) {
    dispatch(submitComment(id, review));
  },
  onSetLoadingReviewStatus(status) {
    dispatch(setLoadingReviewStatus(status));
  }
});

const mapStateToProps = (state) => ({
  openedOffer: getOpenedOffer(state),
  reviewLoadingStatus: getReviewLoadingStatus(state)
});

export {UserReview};
export default connect(mapStateToProps, mapDispatchToProps)(UserReview);
