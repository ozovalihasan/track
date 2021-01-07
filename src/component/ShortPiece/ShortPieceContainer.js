import React from 'react';
import PropTypes from 'prop-types';
import ShortPiece from './ShortPiece';

const ShortPieceContainer = ({ piece }) => (
  <ShortPiece piece={piece} />
);

ShortPieceContainer.propTypes = {
  piece: PropTypes.shape().isRequired,
};

export default ShortPieceContainer;
