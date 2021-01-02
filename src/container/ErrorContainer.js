import React from 'react';
// import { useSelector } from 'react-redux';
import Error from '../component/Error';

const ErrorContainer = () => {
//   const error = useSelector(state => state.pokemon.error.message);
  const error = 'hasan';
  return (
    <Error
      error={error}
    />
  );
};

export default ErrorContainer;
