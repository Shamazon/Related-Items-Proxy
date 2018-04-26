import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from "react-router-3";

import RelatedProducts from './components/App.jsx';
import PhotoGallery from './photo-gallery/components/app.jsx';
import Description from './description/components/App.js';
import Reviews from './reviews/components/App.jsx';

const App = (props) => {
  const id = Number(props.location.pathname.substr(1));
  return (<div>
    <header className="heading"></header>
    <div className="gridContainer">
      <PhotoGallery id={id} />
      <Description id={id} />
      <div className="buy"></div>
      <div className="boughtTogether"></div>
      <RelatedProducts id={id} />
      <Reviews id={id} />
    </div>
    <footer className="footing"></footer>
  </div>);
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={App} />
      <Route path="/:id" component={App} />
    </Route>
  </Router>
  , document.getElementById('shamazon'));