import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Page from './controllers/Page';
import Home from './controllers/Home';
import NotHome from './controllers/NotHome';

export default (
  <Route path="/" component={Page}>
    <IndexRoute component={Home} />
    <Route path="not-home" component={NotHome} />
  </Route>
);
