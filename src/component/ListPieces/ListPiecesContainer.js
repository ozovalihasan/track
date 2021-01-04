import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchTrackedItemList } from '../redux';
import { fetchShowPiece } from '../../redux';

import ListPieces from './ListPieces';

const ListPiecesContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShowPiece(12));
  }, []);
  const pieces = useSelector(state => state.piece.list);

  return (
    <ListPieces
      pieces={pieces}
    />
  );
};

export default ListPiecesContainer;
