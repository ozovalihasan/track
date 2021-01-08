import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListTakenTimes = ({
  children, takenTimes,
}) => (
  <Main>
    {
      takenTimes.map(takenTime => React.cloneElement(children, { key: takenTime.id, takenTime }))
    }

  </Main>
);

const Main = styled.div`
              background-color: blue;
              border: red 2px solid;
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              grid-gap: 2px;
              overflow: scroll;
              align-items: center;
`;

ListTakenTimes.propTypes = {
  children: PropTypes.element.isRequired,
  takenTimes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListTakenTimes;
