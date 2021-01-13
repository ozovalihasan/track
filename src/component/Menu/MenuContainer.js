import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Menu from './Menu';

const MenuContainer = () => {
  const chosenTrackedItem = useSelector(state => state.trackedItem.chosen.trackedItem);

  const pieces = useSelector(state => state.piece.list);
  const trackedItemId = useSelector(state => state.trackedItem.chosen.trackedItem.id);

  let filteredPieces;
  if (trackedItemId) {
    filteredPieces = pieces.filter(piece => piece.tracked_item_id === trackedItemId);
  } else {
    filteredPieces = pieces;
  }

  const isTherePiece = (filteredPieces.length > 0);

  const history = useHistory();

  useEffect(() => {
    history.push('/');
  }, [chosenTrackedItem]);

  return (
    <Menu isTherePiece={isTherePiece} />
  );
};

export default MenuContainer;
