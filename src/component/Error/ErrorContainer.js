import React from 'react';
import { useSelector } from 'react-redux';
import Error from './Error';

const ErrorContainer = () => {
  const error = useSelector(state => state.api.error);

  return (
    error
      ? (<Error error={error.message} />)
      : (<></>)
  );
};

export default ErrorContainer;
