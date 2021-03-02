import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Header from '../../components/header/header';

const Page404 = ({userName}) => (
  <div className="container" style={{height: `100vh`}}>
    <Header userName={userName}/>
    <h1>Error 40<span style={{transform: `scale(-1, 1)`, display: `inline-block`}}>4</span>  <br/><small>Page not Found</small></h1>
    <Link to="/">Return to the main page</Link>
  </div>

);

Page404.propTypes = {
  userName: PropTypes.string.isRequired
};

export default Page404;
