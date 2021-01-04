import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShortTrackedItemContainer from '../../container/ShortTrackedItemContainer';

const ListPieces = ({
  pieces,
}) => (
  <Main>
    {
    pieces.map(piece => (
      <ShortTrackedItemContainer key={piece.id} piece={piece} />
    ))
  }

  </Main>
);

const Main = styled.div`
              background-color: blue;

`;

ListPieces.propTypes = {
  pieces: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListPieces;
