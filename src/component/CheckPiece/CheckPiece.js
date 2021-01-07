/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckPiece = ({
  piece, handleClickCreate, handleClickDelete,
}) => (
  <Main>
    <CheckButton type="button" onClick={handleClickCreate}>
      +1
      <div>
        {piece.name}
      </div>
    </CheckButton>
    <DeleteButton type="button" onClick={handleClickDelete}>
      Cancel
    </DeleteButton>

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

const CheckButton = styled.button`
  height: 30px;
  width: 30px;
  border: dashed white 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;

  &:hover {
    background-color: red;
  }
`;

const DeleteButton = styled.button`
  background-color: red;
`;

CheckPiece.propTypes = {

  piece: PropTypes.shape({ name: PropTypes.string }).isRequired,
  handleClickCreate: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};

export default CheckPiece;
