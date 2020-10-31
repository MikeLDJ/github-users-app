import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { GithubMarkSvg } from '../../SVGs/GithubMarkSvg';
import { ReactMarkSvg } from '../../SVGs/ReactMarkSvg';

const reactMarkSvgAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  text-decoration: none;
`;

const StyledGithubMarkSvg = styled(GithubMarkSvg)`
  display: block;
  height: 20rem;
  width: 20rem;
`;

const StyledReactMarkSvg = styled(ReactMarkSvg)`
  animation: ${reactMarkSvgAnimation} infinite 20s linear;
`;

const StyledGithubMarkInner = styled.div`
  display: block;
  height: 7rem;
  left: 50%;
  position: absolute;
  top: 15rem;
  transform: translateX(-50%);
  width: 7rem;
`;

const StyledHeader = styled.h1`
  font-size: 2rem;
  color: black;
`;

export const EntranceButton = (): JSX.Element => (
  <StyledButton to="/users">
    <StyledGithubMarkSvg />
    <StyledGithubMarkInner>
      <StyledReactMarkSvg />
    </StyledGithubMarkInner>
    <StyledHeader>Explore Github Users</StyledHeader>
  </StyledButton>
);
