import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../components/header/header';
import UserReview from '../../components/offer-property/user-review/user-review';
import Gallery from '../../components/offer-property/gallery/gallery';
import InsideList from '../../components/offer-property/inside-list/inside-list';
import ReviewList from '../../components/offer-property/review-list/review-list';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import Toast from '../../components/toast/toast';
import Loading from '../../components/loading/loading';

import {getRatingCount} from '../../utils';
import {AuthorizationStatus} from '../../const';
import {fetchOpenedOfferData, toggleFavorOnServer} from '../../store/api-actions';
import {toggleOpenedCardFavor} from '../../store/action';


const OfferProperty = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const {city} = useSelector((state) => state.MAIN);
  const {openedOffer, nearbyOffers, currentReviews} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const match = useRouteMatch();
  const pathId = match.params.id.slice(1);

  if (String(openedOffer.id) !== pathId) {
    dispatch(fetchOpenedOfferData(pathId));

    return (
      <Loading />
    );
  }

  const MAX_REVIEWS_VISIBLE = 10;
  const reviewList = currentReviews.length > 10 ? currentReviews.slice(0, MAX_REVIEWS_VISIBLE) : currentReviews;

  const {id, images, isPremium, isFavorite, title, rating, type, bedrooms, maxAdults, price, goods, host: {avatarUrl, name, isPro}, description} = openedOffer;
  const isOfferPremium = isPremium && <div className="property__mark"><span>Premium</span></div>;
  const isUserPro = isPro && <span className="property__user-status">Pro</span>;
  const isCardFavorite = isFavorite ? `property__bookmark-button--active` : ``;

  const cardFavorClickHandler = (cardId, status) => {
    const newStatus = status ? 0 : 1;
    dispatch(toggleFavorOnServer(cardId, newStatus));
    dispatch(toggleOpenedCardFavor());
  };
  return (
    <div className="page">
      <Toast />
      <Header />
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
                <button className={`property__bookmark-button ${isCardFavorite} button`} type="button" onClick={()=> cardFavorClickHandler(id, isFavorite)}>
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
                {
                  reviewList && <ReviewList reviews={reviewList} />
                }

                {authorizationStatus === AuthorizationStatus.AUTH ? <UserReview /> : ``}
              </section>
            </div>
          </div>
          {
            nearbyOffers.length && <Map offers={[...nearbyOffers, openedOffer]} city={city} mode="OFFER"/>
          }
        </section>
        {
          nearbyOffers.length &&
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <OfferList offers={nearbyOffers} mode="OFFER"/>
                </div>
              </section>
            </div>
        }
      </main>
    </div>
  );
};

export default OfferProperty;
