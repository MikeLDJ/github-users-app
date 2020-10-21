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
  position: relative;
  display: block;
  height: 50%;
  width: 50%;
  margin: auto;
`;

const StyledReactMarkSvg = styled(ReactMarkSvg)`
  animation: ${reactMarkSvgAnimation} infinite 20s linear;
`;

const GithubMarkInner = styled.div`
  position: absolute;
  display: block;
  height: 33%;
  width: 33%;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
`;

export const EntranceButton = (): JSX.Element => (
  <StyledButton to="/users">
    <GithubMarkSvg />
    <GithubMarkInner>
      <StyledReactMarkSvg />
    </GithubMarkInner>
  </StyledButton>
);
