import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import styled from 'styled-components';

const ToggleShowHide = ({
  component, showList, handleClick,
}) => (
  <div>
    <Main type="button" onClick={handleClick}>
      Show
    </Main>
    <ComponentButton>
      {showList && (component)}
    </ComponentButton>
  </div>
);

ToggleShowHide.propTypes = {
  component: PropTypes.element.isRequired,
  showList: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,

};
const Main = styled.button`
border: 2px blue solid;
width: 100%;
height: 100%;
`;

const ComponentButton = styled.button`
  background-color: white;
`;

export default ToggleShowHide;
