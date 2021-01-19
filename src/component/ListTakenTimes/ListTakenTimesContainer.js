import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchListTakenTimes } from '../../redux';

import ListTakenTimes from './ListTakenTimes';

const ListTakenTimesContainer = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListTakenTimes());
  }, []);

  const takenTimes = useSelector(state => state.takenTime.list);

  const trackedItemId = useSelector(state => state.trackedItem.chosen.trackedItem.id);

  let filteredTakenTimes;
  if (trackedItemId) {
    filteredTakenTimes = takenTimes.filter(
      takenTimes => takenTimes.tracked_item_id === trackedItemId,
    );
  } else {
    filteredTakenTimes = takenTimes;
  }

  return (
    <ListTakenTimes takenTimes={filteredTakenTimes}>
      {children}
    </ListTakenTimes>
  );
};

ListTakenTimesContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ListTakenTimesContainer;
