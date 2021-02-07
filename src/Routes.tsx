import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import IndexPage from './pages/IndexPage';

export default () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={IndexPage} />
    </Switch>
  </HashRouter>
);
