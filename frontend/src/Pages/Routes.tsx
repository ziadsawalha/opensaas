import * as React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
const history = createBrowserHistory();
const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route path='/auth' component={Auth} />
      <Route exact path='/' render={() => (<>default</>) } />
    </Switch>
  </Router>
);

export default Routes;