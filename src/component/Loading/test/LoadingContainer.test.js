import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LoadingContainer from '../LoadingContainer';

jest.mock('../Loading', () => {
  const Loading = () => (
    <>
      Mock Loading
    </>
  );
  Loading.displayName = 'Loading';

  return Loading;
});

const initStore = {
  api: { loading: true },
};

const mockStore = configureStore();
const store = mockStore(initStore);
store.dispatch = jest.fn();

let renderReadyComponent;

beforeEach(() => {
  renderReadyComponent = (
    <Provider store={store}>
      <LoadingContainer />
    </Provider>
  );
});

describe('<LoadingContainer />', () => {
  describe('If data is being loaded', () => {
    it('imports data from store', () => {
      render(renderReadyComponent);

      expect(screen.getByText(/Mock Loading/i)).toBeInTheDocument();
    });

    it('renders correctly', () => {
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });

  describe('If data is not being loaded', () => {
    it('imports data from store', () => {
      initStore.api.loading = false;
      render(renderReadyComponent);

      expect(screen.queryByText(/Mock Loading/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      initStore.api.loading = false;
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
