import React from 'react';

import styled from 'styled-components';
import { EntranceButton } from './EntranceButton/EntranceButton';

import { GithubLogoSvg } from '../SVGs/GithubLogoSvg';

const StyledContainer = styled.div`
  max-width: 30rem;
  width: 100%;
`;

export const Home = (): JSX.Element => (
  <StyledContainer>
    <GithubLogoSvg />
    <EntranceButton />
  </StyledContainer>
);
