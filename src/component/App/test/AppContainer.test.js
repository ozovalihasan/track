import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AppContainer from '../AppContainer';

jest.mock('../App', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const App = ({ isThereTrackedItem, isThereUser }) => (
    <div>
      Mock App
      {`isThereTrackedItem: ${isThereTrackedItem}`}
      {`isThereUser: ${isThereUser}`}
    </div>
  );
  App.displayName = 'App';
  App.propTypes = {
    isThereTrackedItem: PropTypes.bool.isRequired,
    isThereUser: PropTypes.bool.isRequired,
  };
  return App;
});

const initStore = {
  user: {},
  trackedItem: {
    list: [],
  },
};
const mockStore = configureStore();
const store = mockStore(initStore);
store.dispatch = jest.fn();

let renderReadyComponent;

beforeEach(() => {
  renderReadyComponent = (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
});

describe('<AppContainer />', () => {
  it('renders Menu', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Mock App/i)).toBeInTheDocument();
  });

  describe('If there is no tracked item', () => {
    it('passes isThereTrackedItem as false', () => {
      render(renderReadyComponent);
      expect(screen.getByText(/isThereTrackedItem: false/i)).toBeInTheDocument();
    });
  });

  describe('If there is a tracked item', () => {
    it('passes isThereTrackedItem as true', () => {
      initStore.trackedItem.list = [{ name: 'First Mock Tracked Item' }];
      render(renderReadyComponent);
      expect(screen.getByText(/isThereTrackedItem: true/i)).toBeInTheDocument();
    });
  });

  describe('If there is no any user', () => {
    it('passes isThereUser as false', () => {
      render(renderReadyComponent);
      expect(screen.getByText(/isThereUser: false/i)).toBeInTheDocument();
    });
  });

  describe('If there is a user', () => {
    initStore.user = { username: 'Mock Name' };
    describe('If localStorage.token is falsy', () => {
      it('passes isThereUser as false', () => {
        localStorage.removeItem('token');
        render(renderReadyComponent);

        expect(screen.getByText(/isThereUser: false/i)).toBeInTheDocument();
      });

      it('triggers useEffect when the component is rendered for the first time', () => {
        localStorage.removeItem('token');
        render(renderReadyComponent);

        expect(store.dispatch).toHaveBeenCalledTimes(0);
      });
    });
    describe('If localStorage.token is truthy', () => {
      it('passes isThereUser as true', () => {
        localStorage.token = 'Mock Token';
        render(renderReadyComponent);

        expect(screen.getByText(/isThereUser: true/i)).toBeInTheDocument();
      });

      it('triggers useEffect when the component is rendered for the first time', () => {
        localStorage.token = 'Mock Token';
        render(renderReadyComponent);

        expect(store.dispatch).toHaveBeenCalledTimes(2);
      });
      describe('If localStorage.trackedItem is truthy', () => {
        it('triggers useEffect when the component is rendered for the first time', () => {
          localStorage.trackedItem = 'Mock Tracked Item';
          localStorage.token = 'Mock Token';
          render(renderReadyComponent);

          expect(store.dispatch).toHaveBeenCalledTimes(3);
        });
      });
    });
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
