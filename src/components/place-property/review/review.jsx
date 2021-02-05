import React from 'react';
import Star from './star/star';

const STAR_LIST = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

const Review = () => (
  <form className="reviews__form form" action="#" method="post">
    <label className="reviews__label form__label" htmlFor="review">Your review</label>
    <div className="reviews__rating-form form__rating">
      {
        STAR_LIST.map((item, i) => <Star key={ item + i} digit={i} title={item}/>)
      }
    </div>
    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} />
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
    </div>
  </form>
);

export default Review;
