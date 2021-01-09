import { render, screen } from '@testing-library/react';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import ErrorContainer from '../ErrorContainer';

const initStore = { api: { error: '' } };
const mockStore = configureStore();

const store = mockStore(initStore);

store.dispatch = jest.fn();

const renderReadyComponent = (
  <Provider store={store}>
    <ErrorContainer />
  </Provider>
);

describe('<ErrorContainer />', () => {
  describe('if there is no an error ', () => {
    it('renders error.message ', () => {
      render(renderReadyComponent);
      expect(screen.queryByText(/There is an error/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });

  describe('if there is an error message', () => {
    it('renders error.message ', () => {
      initStore.api.error = { message: 'There is an error' };
      render(renderReadyComponent);
      expect(screen.getByText(/There is an error/i)).toBeInTheDocument();
    });

    it('renders correctly', () => {
      initStore.api.error = { message: 'There is an error' };
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
