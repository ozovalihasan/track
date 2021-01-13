import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as color from '../styleVariables';

const Menu = ({ isTherePiece }) => (
  <Main>
    <StyledLink to="/" exact>
      <OneLink>
        Add Check
      </OneLink>
    </StyledLink>
    <StyledLink to="/list-taken-times" exact disabled={!isTherePiece}>
      <OneLink>
        Track.it
      </OneLink>
    </StyledLink>
    <StyledLink to="/your-progress" exact disabled={!isTherePiece}>
      <OneLink>
        Your Progress
      </OneLink>
    </StyledLink>
    <StyledLink to="/profile" exact>
      <OneLink>
        More
      </OneLink>
    </StyledLink>
  </Main>
);

const Main = styled.div`
    background-color: ${color.secondColor};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: fixed;
    bottom: 0;
    height: 15%;
    width: 100%;
`;

const OneLink = styled.div`
margin: 2px;
padding: 10px 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`;

const StyledLink = styled(NavLink)`
  background-color: ${color.sixthColor};
  color: ${color.seventhColor};
  height: 100%;
  position: relative;

  &.active {
    &::before {
      content: '';
      border-top: 7px ${color.fifthColor} solid;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    width: 100%;
    color: white;
    background-color: ${color.firstColor};
  }
  ${props => props.disabled && `
    pointer-events: none;
    background-color: ${color.fifthColor};
    color: ${color.sixthColor};
  };
  `}
`;

Menu.propTypes = {
  isTherePiece: PropTypes.bool.isRequired,
};

export default Menu;
