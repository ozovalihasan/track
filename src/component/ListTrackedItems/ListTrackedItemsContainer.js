import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListTrackedItems } from '../../redux';

import ListTrackedItems from './ListTrackedItems';

const ListTrackedItemsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListTrackedItems());
  }, []);
  const trackedItems = useSelector(state => state.trackedItem.list);

  return (
    <ListTrackedItems
      trackedItems={trackedItems}
    />
  );
};

export default ListTrackedItemsContainer;
