import React from 'react';
import PropTypes from 'prop-types';
import ShortTrackedItem from '../ShortTrackedItem/ShortTrackedItem';

const ShortPieceContainer = ({ piece }) => (
  <ShortTrackedItem piece={piece} />
);

ShortPieceContainer.propTypes = {
  piece: PropTypes.shape().isRequired,
};

export default ShortPieceContainer;
