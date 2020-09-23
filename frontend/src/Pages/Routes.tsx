import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import MainLayout from './MainLayout';
import { NotificationContextProvider } from './MainLayout/NotificationContext';
const history = createBrowserHistory();
const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route
        path='/'
        render={() => (
          <NotificationContextProvider>
            <MainLayout />
          </NotificationContextProvider>
        )}
      />
    </Switch>
  </Router>
);

export default Routes;
