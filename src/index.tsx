import { CssBaseline } from '@material-ui/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import ProjectsPage from './pages/ProjectsPage';
import SessionsPage from './pages/SessionsPage';
import WorkflowsPage from './pages/WorkflowsPage';
import ShowProjectPage from './pages/ShowProjectPage';
import ShowWorkflowPage from './pages/ShowWorkflowPage';
import ShowSessionPage from './pages/ShowSessionPage';

const App: React.VFC = () => (
  <>
    <CssBaseline />
    <HashRouter>
      <MainLayout>
        <Switch>
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/projects/:id" exact component={ShowProjectPage} />
          <Route path="/workflows" exact component={WorkflowsPage} />
          <Route path="/workflows/:id" exact component={ShowWorkflowPage} />
          <Route path="/sessions" exact component={SessionsPage} />
          <Route path="/sessions/:id" exact component={ShowSessionPage} />
          <Redirect to="/projects" />
        </Switch>
      </MainLayout>
    </HashRouter>
  </>
);

const rootId = Date.now().toString(16);

document.head.innerHTML = '';
document.body.innerHTML = `<div id="${rootId}"></div>`;

ReactDOM.render(<App />, document.getElementById(rootId));
