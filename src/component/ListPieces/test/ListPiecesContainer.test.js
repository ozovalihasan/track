import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ListPiecesContainer from '../ListPiecesContainer';

jest.mock('../ListPieces', () => {
  const ListPieces = props => (
    <div>
      Mock ListPieces
      {JSON.stringify(props)}
    </div>
  );
  ListPieces.displayName = 'ListPieces';

  return ListPieces;
});

const MockChildren = () => (
  <div>Mock Children</div>
);

const initStore = {
  trackedItem: { chosen: { trackedItem: { } } },
  // trackedItem: { chosen: { trackedItem: { } } },
  piece: {
    list: [
      { tracked_item_id: 1, name: 'Piece of First Tracked Item' },
      { tracked_item_id: 2, name: 'Piece of Second Tracked Item' },
    ],
  },
};
const mockStore = configureStore();
const store = mockStore(initStore);
store.dispatch = jest.fn();

let renderReadyComponent;
const pieces = {};

beforeEach(() => {
  renderReadyComponent = (
    <Provider store={store}>
      <ListPiecesContainer pieces={pieces}>
        <MockChildren />
      </ListPiecesContainer>
    </Provider>
  );
});

describe('<ListPiecesContainer />', () => {
  it('triggers useEffect when the component is rendered for the first time', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('imports data from store', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Piece of First Tracked Item/i)).toBeInTheDocument();
    expect(screen.getByText(/Piece of Second Tracked Item/i)).toBeInTheDocument();
  });

  it('filters pieces of chosen tracked item if it exists', () => {
    initStore.trackedItem.chosen.trackedItem.id = 1;
    render(renderReadyComponent);

    expect(screen.getByText(/Piece of First Tracked Item/i)).toBeInTheDocument();
    expect(screen.queryByText(/Piece of Second Tracked Item/i)).not.toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
