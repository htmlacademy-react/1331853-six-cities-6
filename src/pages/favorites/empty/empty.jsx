import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../../../components/footer/footer';
import Header from '../../../components/header/header';

const FavoritesEmpty = ({auth, userName}) => (
  <div className="page page--favorites-empty">
    <Header auth={auth} userName={userName} />
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

FavoritesEmpty.propTypes = {
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

export default FavoritesEmpty;
