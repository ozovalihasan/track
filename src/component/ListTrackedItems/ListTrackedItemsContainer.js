import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCreateTrackedItem,
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

  const handleClick = () => {
    dispatch(fetchCreateTrackedItem({ name }));
  };

  const handleClickShowAll = () => {
    dispatch(showAllTrackedItems());
    dispatch(hideTrackedItems());
  };

  const handleClickChoose = trackedItemId => {
    dispatch(fetchShowTrackedItem(trackedItemId));
    dispatch(hideTrackedItems());
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <ListTrackedItems
      trackedItems={trackedItems}
      handleClick={handleClick}
      handleChange={handleChange}
      handleClickChoose={handleClickChoose}
      handleClickShowAll={handleClickShowAll}
      name={name}
    />
  );
};

export default ListTrackedItemsContainer;
