/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OneTrackedItem = (
  { trackedItem, pieces },
) => (
  <Main>
    {trackedItem && (
      <div>
        {trackedItem.name}

        <div>
          {(pieces.length !== 0) && (
            <div>

              Pieces
              {pieces.map(piece => (
                <Link key={piece.id} to={`/one-piece/${piece.id}`}>
                  <div>
                    {piece.name}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    )}
  </Main>
);

const Main = styled.div`
  font-size: 30px;
`;

OneTrackedItem.propTypes = {
  trackedItem: PropTypes.shape({ name: PropTypes.string }).isRequired,
  pieces: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default OneTrackedItem;
