import { render, screen } from '@testing-library/react';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import ErrorContainer from '../ErrorContainer';

jest.mock('../Error', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const Error = ({
    error,
  }) => (
    <>
      Mock Error
      {JSON.stringify(error)}
    </>
  );
  Error.displayName = 'Error';
  Error.propTypes = {
    error: PropTypes.string.isRequired,
  };
  return Error;
});

const initStore = { api: { error: '' } };
const mockStore = configureStore();
const store = mockStore(initStore);
store.dispatch = jest.fn();

const renderedComponent = () => render(
  <Provider store={store}>
    <ErrorContainer />
  </Provider>,
);

describe('<ErrorContainer />', () => {
  describe('if there is no an error ', () => {
    it('imports data from store ', () => {
      renderedComponent();
      expect(screen.queryByText(/There is an error/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(renderedComponent()).toMatchSnapshot();
    });
  });

  describe('if there is an error message', () => {
    it('imports data from store ', () => {
      initStore.api.error = { message: 'There is an error' };
      renderedComponent();
      expect(screen.getByText(/There is an error/i)).toBeInTheDocument();
    });

    it('renders correctly', () => {
      initStore.api.error = { message: 'There is an error' };
      expect(renderedComponent()).toMatchSnapshot();
    });
  });
});
