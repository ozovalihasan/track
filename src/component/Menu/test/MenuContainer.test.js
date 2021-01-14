import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MenuContainer from '../MenuContainer';

jest.mock('../Menu', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const Menu = ({
    isTherePiece,
  }) => (
    <div>
      Mock Menu
      {isTherePiece ? 'isTherePiece: true' : 'isTherePiece: false'}
    </div>
  );
  Menu.displayName = 'Menu';
  Menu.propTypes = {
    isTherePiece: PropTypes.bool.isRequired,
  };
  return Menu;
});

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const initStore = {
  piece: {
    list: [
      { name: 'First Piece', tracked_item_id: 1 },
      { name: 'Second Piece', tracked_item_id: 2 },
    ],
  },
  trackedItem: {
    chosen: { trackedItem: {} },
  },
};
const mockStore = configureStore();
const store = mockStore(initStore);
store.dispatch = jest.fn();

let renderReadyComponent;

beforeEach(() => {
  renderReadyComponent = (
    <Provider store={store}>
      <MenuContainer />
    </Provider>
  );
});

describe('<MenuContainer />', () => {
  it('renders Menu', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Mock Menu/i)).toBeInTheDocument();
  });

  it('passes isTherePiece as true if there is a piece to show ', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/isTherePiece: true/i)).toBeInTheDocument();
    expect(screen.queryByText(/isTherePiece: false/i)).not.toBeInTheDocument();

    initStore.trackedItem.chosen.trackedItem.id = 3;
    render(renderReadyComponent);

    expect(screen.getByText(/isTherePiece: false/i)).toBeInTheDocument();
  });

  it('filters pieces', () => {
    initStore.trackedItem.chosen.trackedItem.id = 2;
    render(renderReadyComponent);

    expect(screen.getByText(/isTherePiece: true/i)).toBeInTheDocument();
    expect(screen.queryByText(/isTherePiece: false/i)).not.toBeInTheDocument();

    initStore.trackedItem.chosen.trackedItem.id = 3;
    render(renderReadyComponent);
    expect(screen.queryByText(/isTherePiece: false/i)).toBeInTheDocument();
  });

  it('redirects to \'/\'', () => {
    render(renderReadyComponent);

    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
