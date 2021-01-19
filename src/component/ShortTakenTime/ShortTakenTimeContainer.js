import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDestroyTakenTime } from '../../redux';
import ShortTakenTime from './ShortTakenTime';

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
