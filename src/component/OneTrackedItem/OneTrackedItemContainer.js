import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowTrackedItem } from '../../redux';
import OneTrackedItem from './OneTrackedItem';

const OneTrackedItemContainer = ({ match }) => {
  const dispatch = useDispatch();
  const storedTrackedItem = useSelector(state => state.trackedItem.chosen);
  const selectedTrackedItem = match.params.id;

  useEffect(() => {
    dispatch(fetchShowTrackedItem(selectedTrackedItem));
  }, []);

  if (storedTrackedItem.trackedItem.length !== 0) {
    return (
      <OneTrackedItem
        trackedItem={storedTrackedItem.trackedItem}
        pieces={storedTrackedItem.pieces}
      />
    );
  }
  return (<></>);
};

OneTrackedItemContainer.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default OneTrackedItemContainer;
