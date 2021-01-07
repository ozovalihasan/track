import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchListPieces } from '../../redux';

import ListPieces from './ListPieces';

const ListPiecesContainer = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListPieces());
  }, []);

  const pieces = useSelector(state => state.piece.list);
  const trackedItemId = useSelector(state => state.trackedItem.chosen.trackedItem.id);

  let filteredPieces;
  if (trackedItemId) {
    filteredPieces = pieces.filter(piece => piece.tracked_item_id === trackedItemId);
  } else {
    filteredPieces = pieces;
  }

  return (
    <ListPieces pieces={filteredPieces}>
      {children}
    </ListPieces>
  );
};

ListPiecesContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ListPiecesContainer;
