import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import YourProgressContainer from '../YourProgressContainer';

// jest.mock('../setIntervalTime', () => () => ([
//   { start: 40000, end: 50000 },
//   { start: 30000, end: 40000 },
//   { start: 20000, end: 30000 },
// ]));

jest.mock('../YourProgress', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const YourProgress = ({ pieces }) => (
    <div>
      Mock YourProgress
      {JSON.stringify(pieces)}
    </div>
  );
  YourProgress.displayName = 'YourProgress';
  YourProgress.propTypes = {
    pieces: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };
  return YourProgress;
});

const initStore = {
  piece: {
    list: [
      {
        id: 1,
        name: 'First Mock Piece',
        tracked_item_id: 1,
        frequency: 3,
        created_at: 946684800001,
        frequency_time: 604800,
      },
      {
        id: 2,
        name: 'Second Mock Piece',
        tracked_item_id: 2,
        frequency: 2,
        created_at: 94668480002,
        frequency_time: 604800,
      },
    ],
  },
  trackedItem: {
    chosen: { trackedItem: {} },
  },
  takenTime: {
    list: [
      { created_at: 946684803, piece: { id: 1 } },
      { created_at: 946684805, piece: { id: 1 } },
      { created_at: 946684806, piece: { id: 2 } },
    ],
  },
};
const mockStore = configureStore();
const store = mockStore(initStore);
store.dispatch = jest.fn();

let renderReadyComponent;

beforeEach(() => {
  Date.now = jest.fn(() => new Date('2000-01-03T00:00:00Z').getTime());
  renderReadyComponent = (
    <Provider store={store}>
      <YourProgressContainer />
    </Provider>
  );
});

describe('<YourProgressContainer />', () => {
  it('triggers useEffect when the component is rendered for the first time', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it('renders Menu', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Mock YourProgress/i)).toBeInTheDocument();
  });

  describe('If there is no chosen and tracked item', () => {
    it('imports data from store and renders all pieces', () => {
      render(renderReadyComponent);

      expect(screen.getByText(/First Mock Piece/i)).toBeInTheDocument();
      expect(screen.getByText(/"percentageTakenTimes":\[0,66.66666666666666\]/i)).toBeInTheDocument();
      expect(screen.getByText(/Second Mock Piece/i)).toBeInTheDocument();
    });
  });

  describe('If there is a chosen and tracked item', () => {
    it('renders pieces of the tracked item', () => {
      initStore.trackedItem.chosen.trackedItem.id = 1;
      render(renderReadyComponent);

      expect(screen.getByText(/First Mock Piece/i)).toBeInTheDocument();
      expect(screen.queryByText(/Second Mock Piece/i)).not.toBeInTheDocument();
    });
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
