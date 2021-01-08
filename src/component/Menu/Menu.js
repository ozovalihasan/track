import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Menu = () => (
  <Main>
    <OneLink>
      <StyledLink to="/" exact>
        Add Check
      </StyledLink>
    </OneLink>
    <OneLink>
      <StyledLink to="/list-taken-times" exact>
        Track.it
      </StyledLink>
    </OneLink>
    <OneLink>
      <StyledLink to="/your-progress" exact>
        Your Progress
      </StyledLink>
    </OneLink>
    <OneLink>
      <StyledLink to="/profile" exact>
        More
      </StyledLink>
    </OneLink>
  </Main>
);

const Main = styled.div`
    background-color: orange;
    border: pink 2px solid;
    display: flex;
`;
// position: absolute;
// bottom: 0;
// height: auto;

const OneLink = styled.div`
border: pink 2px solid;
margin: 2px;
padding: 10px 0;
width: 25%;

`;

const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: red;
  }
`;

export default Menu;
