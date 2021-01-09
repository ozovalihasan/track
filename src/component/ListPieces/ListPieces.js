import React from 'react';
import PropTypes from 'prop-types';

const ListPieces = ({
  children, pieces,
}) => (
  <>
    {
      pieces.map(
        piece => React.cloneElement(
          children, { key: piece.id, piece },
        ),
      )
    }

  </>
);

ListPieces.propTypes = {
  children: PropTypes.element.isRequired,
  pieces: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListPieces;
