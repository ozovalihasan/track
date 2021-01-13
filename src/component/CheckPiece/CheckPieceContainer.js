import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CheckPiece from './CheckPiece';
import {
  fetchCreateTakenTime, fetchDestroyPiece, showPiece,
} from '../../redux';

const CheckPieceContainer = ({ piece }) => {
  const dispatch = useDispatch();

  const handleClickCreate = () => {
    dispatch(fetchCreateTakenTime({ piece_id: piece.id }));
  };

  const handleClickDelete = () => {
    dispatch(showPiece(piece.id));
    dispatch(fetchDestroyPiece(piece.id));
  };

  return (
    <CheckPiece
      piece={piece}
      handleClickCreate={handleClickCreate}
      handleClickDelete={handleClickDelete}
    />
  );
};

CheckPieceContainer.propTypes = {
  piece: PropTypes.shape().isRequired,
};

export default CheckPieceContainer;
