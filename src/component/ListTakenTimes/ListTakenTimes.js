import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fifthColor } from '../styleVariables';

const ListTakenTimes = ({
  children, takenTimes,
}) => (
  <Main>

    {takenTimes.length === 0 && 'There is no anything to show'}
    {
      takenTimes.map(takenTime => React.cloneElement(children, { key: takenTime.id, takenTime }))
    }

  </Main>
);

const Main = styled.div`
  background-color: ${fifthColor};
  overflow: scroll;
  align-items: center;
`;

ListTakenTimes.propTypes = {
  children: PropTypes.element.isRequired,
  takenTimes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListTakenTimes;
