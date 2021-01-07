import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ShortTakenTime from './ShortTakenTime';
import { fetchDestroyTakenTime } from '../../redux';

const ShortTakenTimeContainer = ({ takenTime }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchDestroyTakenTime(takenTime.id));
  };
  return (
    <ShortTakenTime takenTime={takenTime} handleClick={handleClick} />
  );
};

ShortTakenTimeContainer.propTypes = {
  takenTime: PropTypes.shape().isRequired,
};

export default ShortTakenTimeContainer;
