import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './assets/scss/index.scss';

import routes from '@/routes';

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
