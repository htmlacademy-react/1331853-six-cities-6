import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import {Link} from 'react-router-dom';

const Page404 = ({auth, userName}) => (
  <div className="container" style={{height: `100vh`}}>
    <Header auth={auth} userName={userName}/>
    <h1>Error 40<span style={{transform: `scale(-1, 1)`, display: `inline-block`}}>4</span>  <br/><small>Page not Found</small></h1>
    <Link to="/">Return to the main page</Link>
  </div>

);

Page404.propTypes = {
  auth: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired
};

export default Page404;
