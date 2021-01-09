import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCreateTrackedItem,
  fetchListTrackedItems,
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

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <ListTrackedItems
      trackedItems={trackedItems}
      handleClickCreateTrackedItem={handleClickCreateTrackedItem}
      handleChange={handleChange}
      handleClickShowAll={handleClickShowAll}
      name={name}
    />
  );
};

export default ListTrackedItemsContainer;
