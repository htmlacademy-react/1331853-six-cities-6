import React from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

import {offersPropValid} from '../../../../props-valid/props-valid';
import {STAR_LIST} from './../../../../const';

const PlaceCard = ({offer}) => {
  const {id, previewImage, price, type, rating, isPremium, title} = offer;
  const isCardPremium = isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``;
  const ratingCount = 100 / STAR_LIST.length * rating;
  return (
    <article className="cities__place-card place-card">
      {isCardPremium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer:${id}`}>
          <img className="place-card__image" src={previewImage} alt="Place image" width={260} height={200} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingCount}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};


PlaceCard.propTypes = {
  offer: PropTypes.shape(offersPropValid)
};

export default PlaceCard;
