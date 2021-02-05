import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';

const Page404 = ({auth, userName}) => (
  <div className="container" style={{height: `100vh`}}>
    <Header auth={auth} userName={userName}/>
    <h1>Page not Found</h1>
    <a>Return to the main page</a>
  </div>

);

Page404.propTypes = {
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

export default Page404;
