import PropTypes from 'prop-types';
import React from 'react';
import {Redirect, useHistory} from 'react-router-dom';

import Header from '../../components/header/header';
import UserReview from '../../components/offer-property/user-review/user-review';
import Gallery from '../../components/offer-property/gallery/gallery';


import {offersPropValid, reviewsPropValid} from '../../props-valid/props-valid';
import {getRatingCount} from '../../utils';
import InsideList from '../../components/offer-property/inside-list/inside-list';
import ReviewList from '../../components/offer-property/review-list/review-list';

const sortDate = (a, b) => (
  Date.parse(a.date) - Date.parse(b.date)
);

const getCurrentOffer = (id, offers) => {
  for (const offer of offers) {
    if (offer.id === Number(id)) {
      return offer;
    }
  }
  return ``;
};

const getCurrentReviews = (id, reviews) => {
  const reviewList = [];
  for (const review of reviews) {
    if (review.id === Number(id)) {
      reviewList.push(review);
    }
  }

  return reviewList.sort(sortDate);
};

const OfferProperty = ({auth, userName, offers, reviews}) => {
  const pathName = useHistory().location.pathname;
  const offerId = pathName.slice(pathName.indexOf(`:`) + 1);

  const offer = getCurrentOffer(offerId, offers);
  const reviewList = getCurrentReviews(offerId, reviews);

  if (offer.length === 0) {
    return <Redirect to="/404" />;
  }

  const {images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host: {avatarUrl, name, isPro}, description} = offer;
  const isOfferPremium = isPremium && <div className="property__mark"><span>Premium</span></div>;
  const isUserPro = isPro && <span className="property__user-status">Pro</span>;

  return (
    <div className="page">
      <Header auth={auth} userName={userName} />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <Gallery images={images}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isOfferPremium}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingCount(rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <InsideList goods={goods}/>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} alt="Host avatar" width={74} height={74} />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isUserPro}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewList.length}</span></h2>
                <ReviewList reviews={reviewList}/>
                {auth && <UserReview />}
              </section>
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/room.jpg" alt="Place image" width={260} height={200} />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€80</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width={18} height={19}>
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `80%`}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-02.jpg" alt="Place image" width={260} height={200} />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€132</b>
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
                      <span style={{width: `80%`}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="img/apartment-03.jpg" alt="Place image" width={260} height={200} />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€180</b>
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
                      <span style={{width: `100%`}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
};

OfferProperty.propTypes = {
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropValid).isRequired).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewsPropValid).isRequired).isRequired,
};

export default OfferProperty;
