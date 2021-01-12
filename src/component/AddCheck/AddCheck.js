import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListPiecesContainer from '../ListPieces/ListPiecesContainer';
import CheckPieceContainer from '../CheckPiece/CheckPieceContainer';
import * as color from '../styleVariables';

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

const Main = styled.div`
  background-color: ${color.fifthColor};
  width: 100vw;
  box-sizing: content-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2px;
  overflow: scroll;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    overflow: none;
    grid-template-rows: auto;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CreateIcon = styled.div`
  height: 25vw;
  width: 25vw;
  border-radius: 50%;
  background-color: white;
  color: ${color.firstColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  padding: 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    height: 20vw;
    width: 20vw;
  }
`;

export default AddCheck;
