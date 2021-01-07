import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = () => (
  <Main>
    <OneLink>
      <Link to="/">
        Add Check
      </Link>
    </OneLink>
    <OneLink>
      <Link to="/list-taken-times">
        Track.it
      </Link>
    </OneLink>
    <OneLink>
      <Link to="/">
        Your Progress
      </Link>
    </OneLink>
    <OneLink>
      <Link to="/">
        More
      </Link>
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

export default Menu;
