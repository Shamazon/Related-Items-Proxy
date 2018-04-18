import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

import RelatedProducts from './components/App.jsx';

const App = (props) => {
  const id = props.match.params.id || 0;
  return (
    <RelatedProducts id={id} />
  );
};

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/:id" component={App} />
    </div>
  </BrowserRouter>
  , document.getElementById('relatedProducts'));