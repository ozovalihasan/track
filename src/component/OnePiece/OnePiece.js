/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OneTrackedItem = (
  { piece, takenTimes },
) => (
  <Main>
    {piece && (
      <div>
        {piece.name}

        <div>
          {(takenTimes.length !== 0) && (
            <div>
              Taken fetchListTrackedItems
              {takenTimes.map(takenTime => (
                <div key={takenTime.id}>
                  <div>
                    {(new Date(takenTime.created_at * 1000)).toLocaleString()}
                  </div>
                </div>
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
  piece: PropTypes.shape({ name: PropTypes.string }).isRequired,
  takenTimes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default OneTrackedItem;
