import React from 'react';

import { EntranceButton } from './EntranceButton/EntranceButton';

import { GithubLogoSvg } from '../SVGs/GithubLogoSvg';

export const Home = (): JSX.Element => (
  <header>
    <GithubLogoSvg />
    <EntranceButton />
    <h1>Github Users App</h1>
  </header>
);
