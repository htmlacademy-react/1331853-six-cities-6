import React, {useState} from 'react';
import Star from './star/star';
import {STAR_LIST} from '../../../const';

const UserReview = () => {
  const [review, setReview] = useState({
    "comment": ``,
    "date": ``,
    "id": ``,
    "rating": ``,
    "user": {
      "avatarUrl": ``,
      "id": ``,
      "isPro": false,
      "name": ``
    }
  });

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const reviewComment = formData.get(`review`);
    const currentRating = formData.get(`rating`);

    setReview({
      ...review,
      comment: reviewComment,
      date: new Date(),
      rating: currentRating
    });
  };

  return (
    <form onSubmit={(evt)=> formSubmitHandler(evt)} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          STAR_LIST.map((item, i) => <Star key={item + i} digit={STAR_LIST.length - i} title={item} />)
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" >Submit</button>
      </div>
    </form>
  );
};

export default UserReview;
