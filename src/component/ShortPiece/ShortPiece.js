/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShortPiece = ({
  piece,
}) => (
  <Main>
    {piece.name}
  </Main>
);

const Main = styled.div`
  background-color: blue;
`;

ShortPiece.propTypes = {
  piece: PropTypes.shape({ name: PropTypes.string }).isRequired,
};

export default ShortPiece;
