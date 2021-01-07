/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShortPiece = ({
  piece,
}) => (
  <Main>
    <Check>
      +1
    </Check>
    {piece.name}
  </Main>
);

const Main = styled.div`
  height: 130px;
  color: yellow;
  border: pink 2px solid;
  margin: 20px;
  background-color: #1119;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Check = styled.div`
  height: 30px;
  width: 30px;
  border: dashed white 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

ShortPiece.propTypes = {
  piece: PropTypes.shape({ name: PropTypes.string }).isRequired,
};

export default ShortPiece;
