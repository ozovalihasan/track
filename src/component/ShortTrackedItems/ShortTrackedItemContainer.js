import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDestroyTrackedItem, fetchShowTrackedItem, hideTrackedItems } from '../../redux';
import ShortTrackedItem from './ShortTrackedItem';

const ShortTrackedItemsContainer = ({ takenTime }) => {
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
      takenTime={takenTime}
      handleClickDeleteTrackedItem={handleClickDeleteTrackedItem}
      handleClickChoose={handleClickChoose}
    />
  );
};

ShortTrackedItemsContainer.propTypes = {
  takenTime: PropTypes.shape().isRequired,
};

export default ShortTrackedItemsContainer;
