import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { Users } from './components/Users/Users';

import './App.css';

export function App(): JSX.Element {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link className="App-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="App-link" to="/users">
                Browse Users
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
