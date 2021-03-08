import React from 'react';
import {Link} from 'react-router-dom';

import {PropTypes} from 'prop-types';
import {offersPropValid} from './offer-card.prop';

import {getOfferPath, getRatingCount} from '../../../utils';
import {CARD_CLASS_NAME} from '../../../const';
import {ActionCreator} from '../../../store/action';
import {connect} from 'react-redux';
import {toggleFavorOnServer} from '../../../store/api-actions';

const OfferCard = ({id, previewImage, price, type, rating, isPremium, title, isFavorite, mode, setActiveOffer, removeActiveOffer, toggleFavorOnClick}) => {
  const isCardPremium = isPremium && <div className="place-card__mark"><span>Premium</span></div>;
  const isCardFavorite = isFavorite ? `place-card__bookmark-button--active` : ``;

  const cardMouseOverHandler = (cardId) => {
    setActiveOffer(cardId);
  };

  const cardMouseLeaveHandler = () => {
    removeActiveOffer();
  };

  const cardFavorClickHandler = (cardId, status) => {
    const newStatus = Number(!status);
    toggleFavorOnClick(cardId, newStatus);
  };

  return (
    <article className={`${CARD_CLASS_NAME[mode].article} place-card`} onMouseOver={() => cardMouseOverHandler(id)} onMouseLeave={() => cardMouseLeaveHandler()}>
      {isCardPremium}
      <div className={`${CARD_CLASS_NAME[mode].image} place-card__image-wrapper`}>
        <Link to={getOfferPath(id)}>
          <img className="place-card__image" src={previewImage} alt="Place image" width={260} height={200} />
        </Link>
      </div>
      <div className={`${CARD_CLASS_NAME[mode].info ? CARD_CLASS_NAME[mode].info : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isCardFavorite}`} type="button" onClick={()=> cardFavorClickHandler(id, isFavorite)}>
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingCount(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getOfferPath(id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};


OfferCard.propTypes = {
  ...offersPropValid,
  mode: PropTypes.string.isRequired,
  setActiveOffer: PropTypes.func.isRequired,
  removeActiveOffer: PropTypes.func.isRequired,
  toggleFavorOnClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(id) {
    dispatch(ActionCreator.setActiveOffer(id));
  },

  removeActiveOffer() {
    dispatch(ActionCreator.removeActiveOffer());
  },

  toggleFavorOnClick(id, status) {
    dispatch(toggleFavorOnServer(id, status));
  }
});


export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
