import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import {reviewsPropValid} from '../../components/offer-property/review-list/review-item/review-item.prop';
import {offersPropValid} from '../../components/offer-list/offer-card/offer-card.prop';

import Header from '../../components/header/header';
import UserReview from '../../components/offer-property/user-review/user-review';
import Gallery from '../../components/offer-property/gallery/gallery';
import InsideList from '../../components/offer-property/inside-list/inside-list';
import ReviewList from '../../components/offer-property/review-list/review-list';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';

import {getRatingCount} from '../../utils';
import {AuthorizationStatus} from '../../const';
import {fetchCurrentReviews, fetchNearbyOffers, fetchOpenedOffer} from '../../store/api-actions';
import Loading from '../../components/loading/loading';


const sortDate = (a, b) => (
  Date.parse(a.date) - Date.parse(b.date)
);


const OfferProperty = ({authorizationStatus, userName, currentReviews, city, openedOffer, setOpenOffer, nearbyOffers, setNearbyOffers, setCurrentReview}) => {

  const match = useRouteMatch();
  const pathId = match.params.id.slice(1);

  if (String(openedOffer.id) !== pathId) {
    setNearbyOffers(pathId);
    setCurrentReview(pathId);
    setOpenOffer(pathId);
    return (
      <Loading />
    );
  }

  console.log(currentReviews);

  const reviewList = currentReviews;

  const {images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host: {avatarUrl, name, isPro}, description} = openedOffer;
  const isOfferPremium = isPremium && <div className="property__mark"><span>Premium</span></div>;
  const isUserPro = isPro && <span className="property__user-status">Pro</span>;

  return (
    <div className="page">
      <Header userName={userName} />
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
                {
                  reviewList ?
                    <ReviewList reviews={reviewList} />
                    :
                    <Loading />
                }

                {authorizationStatus === AuthorizationStatus.AUTH ? <UserReview /> : ``}
              </section>
            </div>
          </div>
          <Map offers={nearbyOffers} city={city} mode="OFFER"/>
        </section>
        {
          nearbyOffers
            ?
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <OfferList offers={nearbyOffers} mode="OFFER"/>
                </div>
              </section>
            </div>
            :
            <Loading />
        }
      </main>
    </div>

  );
};

OfferProperty.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  openedOffer: PropTypes.oneOfType([PropTypes.shape(offersPropValid), PropTypes.bool]).isRequired,
  nearbyOffers: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(offersPropValid)), PropTypes.bool]).isRequired,
  currentReviews: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(reviewsPropValid)), PropTypes.bool]).isRequired,
  city: PropTypes.string.isRequired,
  setOpenOffer: PropTypes.func.isRequired,
  setNearbyOffers: PropTypes.func.isRequired,
  setCurrentReview: PropTypes.func.isRequired,
};

const mapStateToProps = ({offers, city, authorizationStatus, openedOffer, nearbyOffers, currentReviews}) => ({
  offers,
  city,
  authorizationStatus,
  openedOffer,
  nearbyOffers,
  currentReviews
});

const mapDispatchToProps = (dispatch) => ({
  setOpenOffer(id) {
    dispatch(fetchOpenedOffer(id));
  },
  setNearbyOffers(id) {
    dispatch(fetchNearbyOffers(id));
  },
  setCurrentReview(id) {
    dispatch(fetchCurrentReviews(id));
  }
});


export {OfferProperty};
export default connect(mapStateToProps, mapDispatchToProps)(OfferProperty);
