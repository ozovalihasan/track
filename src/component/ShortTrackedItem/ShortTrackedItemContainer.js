import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDestroyTrackedItem, fetchShowTrackedItem, hideTrackedItems } from '../../redux';
import ShortTrackedItem from './ShortTrackedItem';

const ShortTrackedItemContainer = ({ trackedItem }) => {
  const dispatch = useDispatch();

  const handleClickChoose = trackedItemId => {
    dispatch(fetchShowTrackedItem(trackedItemId));
    dispatch(hideTrackedItems());
  };

  const handleClickDeleteTrackedItem = trackedItemId => {
    dispatch(fetchDestroyTrackedItem(trackedItemId));
    dispatch(hideTrackedItems());
  };

  return (
    <ShortTrackedItem
      trackedItem={trackedItem}
      handleClickDeleteTrackedItem={handleClickDeleteTrackedItem}
      handleClickChoose={handleClickChoose}
    />
  );
};

ShortTrackedItemContainer.propTypes = {
  trackedItem: PropTypes.shape().isRequired,
};

export default ShortTrackedItemContainer;
