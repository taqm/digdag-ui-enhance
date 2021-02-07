import { CssBaseline } from '@material-ui/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './components/MainLayout';

import IndexPage from './pages/IndexPage';

const App: React.VFC = () => (
  <>
    <CssBaseline />
    <HashRouter>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </MainLayout>
    </HashRouter>
  </>
);

const rootId = Date.now().toString(16);

document.head.innerHTML = '';
document.body.innerHTML = `<div id="${rootId}"></div>`;

ReactDOM.render(<App />, document.getElementById(rootId));
