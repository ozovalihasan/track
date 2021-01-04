import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowPiece } from '../../redux';
import OnePiece from './OnePiece';

const OnePieceContainer = ({ match }) => {
  const dispatch = useDispatch();
  const storedPiece = useSelector(state => state.piece.chosen);
  const selectedPiece = match.params.id;
  useEffect(() => {
    dispatch(fetchShowPiece(selectedPiece));
  }, []);
  return (

    <OnePiece
      piece={storedPiece.piece}
      takenTimes={storedPiece.takenTimes}
    />
  );
};

OnePieceContainer.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default OnePieceContainer;
