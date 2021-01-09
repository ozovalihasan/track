import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ListTakenTimesContainer from '../ListTakenTimesContainer';

jest.mock('../ListTakenTimes', () => {
  const ListTakenTimes = props => (
    <div>
      Mock ListTakenTimes
      {JSON.stringify(props)}
    </div>
  );
  ListTakenTimes.displayName = 'ListTakenTimes';
  return ListTakenTimes;
});

const MockChildren = () => (
  <div>Mock Children</div>
);

const initStore = {
  trackedItem: { chosen: { trackedItem: { } } },
  // trackedItem: { chosen: { trackedItem: { } } },
  takenTime: {
    list: [
      { tracked_item_id: 1, name: 'Taken Time Of Pieces Of The First Tracked Item' },
      { tracked_item_id: 2, name: 'Taken Time Of Pieces Of The Second Tracked Item' },
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
      <ListTakenTimesContainer pieces={pieces}>
        <MockChildren />
      </ListTakenTimesContainer>
    </Provider>
  );
});

describe('<ListTakenTimesContainer />', () => {
  it('triggers useEffect when the component is rendered for the first time', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('imports data from store', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Taken Time Of Pieces Of The First Tracked Item/i)).toBeInTheDocument();
    expect(screen.getByText(/Taken Time Of Pieces Of The Second Tracked Item/i)).toBeInTheDocument();
  });

  it('filters taken times of chosen tracked item if it exists', () => {
    initStore.trackedItem.chosen.trackedItem.id = 1;
    render(renderReadyComponent);

    expect(screen.getByText(/Taken Time Of Pieces Of The First Tracked Item/i)).toBeInTheDocument();
    expect(screen.queryByText(/Taken Time Of Pieces Of The Second Tracked Item/i)).not.toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
