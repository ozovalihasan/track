import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListPiecesContainer from '../ListPieces/ListPiecesContainer';
import CheckPieceContainer from '../CheckPiece/CheckPieceContainer';

const AddCheck = () => (
  <Main>
    <Link to="/one-piece-create">
      <CreateIcon>
        +
      </CreateIcon>
    </Link>

    <ListPiecesContainer>
      <CheckPieceContainer />
    </ListPiecesContainer>
  </Main>
);

const CreateIcon = styled.div`
  color: pink;
  height: 100%;
  width: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

const Main = styled.div`
  background-color: blue;
  border: red 2px solid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;
  overflow: scroll;
  align-items: center;
`;

export default AddCheck;
