import React from 'react';
import ReactDOM from 'react-dom';

import './assets/scss/index.scss';

import App from './App';

import routes from '@/routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {
          routes.map((route, i) => (
            <Route key={ `route-${i}` } {...route} />
          ))
        }
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
