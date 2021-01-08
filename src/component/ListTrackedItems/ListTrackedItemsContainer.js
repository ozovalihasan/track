import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCreateTrackedItem,
  fetchDestroyTrackedItem,
  fetchListTrackedItems,
  fetchShowTrackedItem,
  hideTrackedItems,
  showAllTrackedItems,
} from '../../redux';

import ListTrackedItems from './ListTrackedItems';

const ListTrackedItemsContainer = () => {
  const [name, setName] = useState('');
  const trackedItems = useSelector(state => state.trackedItem.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListTrackedItems());
  }, []);

  const handleClickCreateTrackedItem = () => {
    dispatch(fetchCreateTrackedItem({ name }));
    dispatch(hideTrackedItems());
  };

  const handleClickShowAll = () => {
    dispatch(showAllTrackedItems());
    dispatch(hideTrackedItems());
  };

  const handleClickChoose = trackedItemId => {
    dispatch(fetchShowTrackedItem(trackedItemId));
    dispatch(hideTrackedItems());
  };

  const handleClickDeleteTrackedItem = trackedItemId => {
    dispatch(fetchDestroyTrackedItem(trackedItemId));
    dispatch(hideTrackedItems());
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <ListTrackedItems
      trackedItems={trackedItems}
      handleClickCreateTrackedItem={handleClickCreateTrackedItem}
      handleChange={handleChange}
      handleClickChoose={handleClickChoose}
      handleClickShowAll={handleClickShowAll}
      handleClickDeleteTrackedItem={handleClickDeleteTrackedItem}
      name={name}
    />
  );
};

export default ListTrackedItemsContainer;
