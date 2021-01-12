import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import styled from 'styled-components';

const ToggleShowHide = ({
  component, showList, handleClick, chosenTrackedItem,
}) => (
  <div>
    <Main type="button" onClick={handleClick}>
      Show
      {' '}
      {chosenTrackedItem || 'All'}
    </Main>
    <ComponentContainer>
      {showList && (component)}
    </ComponentContainer>
  </div>
);

ToggleShowHide.propTypes = {
  component: PropTypes.element.isRequired,
  showList: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  chosenTrackedItem: PropTypes.string.isRequired,
};

const Main = styled.button`
width: 100%;
height: 100%;
`;

const ComponentContainer = styled.div`
  background-color: white;
`;

export default ToggleShowHide;
