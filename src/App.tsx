import React from 'react';

import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { Users } from './components/Users/Users';

import './App.css';

const Container = styled.div`
  background-color: #eee;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #333;
`;

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
