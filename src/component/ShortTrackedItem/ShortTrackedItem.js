/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShortTrackedItem = ({
  trackedItem,
}) => (
  <Main>
    <Link to={`/one-tracked-item/${trackedItem.id}`}>
      {trackedItem.name}
    </Link>
  </Main>
);

const Main = styled.div`
  background-color: red;
  width: 200px;
  align-self: center;
  text-align: center;
  border: yellow 2px solid;
  margin: 20px;
`;

ShortTrackedItem.propTypes = {
  trackedItem: PropTypes.shape({ name: PropTypes.string }).isRequired,
};

export default ShortTrackedItem;
