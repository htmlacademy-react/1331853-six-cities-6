import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../../components/header/header';
import {Routes} from '../../const';

const Page404 = () => (
  <div className="container" style={{height: `100vh`}}>
    <Header />
    <h1>Error 40<span style={{transform: `scale(-1, 1)`, display: `inline-block`}}>4</span>  <br/><small>Page not Found</small></h1>
    <Link to={Routes.MAIN}>Return to the main page</Link>
  </div>

);

export default Page404;
