/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as color from '../styleVariables';

const CheckPiece = ({
  piece, handleClickCreate, handleClickDelete,
}) => (
  <Main>
    <CheckButton type="button" onClick={handleClickCreate}>
      <NamePiece>
        {piece.name}
      </NamePiece>
      ✔️
    </CheckButton>
    <DeleteButton type="button" onClick={handleClickDelete}>
      X
    </DeleteButton>

  </Main>
);

const Main = styled.div`
  height: 30vw;
  width: 30vw;
  color: yellow;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 768px) {
    width: auto;
    height: auto;
  }
`;

const NamePiece = styled.div`
  padding: 10px;
`;

const CheckButton = styled.button`
  height: 30vw;
  width: 30vw;
  border: solid ${color.firstColor} 2px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  &:hover {
    background-color: ${color.thirdColor};
  }

  @media (min-width: 768px) {
    width: 20vw;
    height: 20vw;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  bottom: -10px;
  right: -10px;
  padding: 20px;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  border: 1px solid ${color.fourthColor};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${color.fourthColor};
  }
`;

CheckPiece.propTypes = {
  piece: PropTypes.shape({ name: PropTypes.string }).isRequired,
  handleClickCreate: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};

export default CheckPiece;
