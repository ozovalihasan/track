import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const LoadingContainer = () => {
  const loading = useSelector(state => state.api.loading);

  return (
    loading
      ? (<Loading />)
      : (<></>)
  );
};

export default LoadingContainer;
