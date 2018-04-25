import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from "react-router-3";

import RelatedProducts from './components/App.jsx';
import PhotoGallery from './photo-gallery/components/app.jsx';
import Description from './description/components/App.js';

const App = (props) => {
  const id = Number(props.location.pathname.substr(1));
  return (
    <div>
      <Description id={id} />
      <PhotoGallery id={id} />
      <RelatedProducts id={id} />
    </div>
  );
};

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={App} />
      <Route path="/:id" component={App} />
    </Route>
  </Router>
  , document.getElementById('shamazon'));