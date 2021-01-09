import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import PieceFormContainer from '../PieceFormContainer';

jest.mock('../PieceForm', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const PieceForm = ({
    frequencyTimeList,
    frequencyTime,
    frequency,
    name,
    trackedItemList,
    trackedItemId,
    handleSubmit,
    handleChange,
  }) => (
    <>
      Mock PieceForm
      {JSON.stringify(trackedItemList)}
      {JSON.stringify(frequencyTimeList)}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" value={`name${name}`} onChange={handleChange} />
        <input type="text" name="frequency" placeholder="frequency" value={frequency} onChange={handleChange} />
        <input type="text" name="frequencyTime" placeholder="frequencyTime" value={`frequencyTime${frequencyTime}`} onChange={handleChange} />
        <input type="text" name="trackedItemId" placeholder="trackedItemId" value={`trackedItemId${trackedItemId}`} onChange={handleChange} />
        <button type="submit">
          Submit
        </button>
      </form>

    </>
  );

  PieceForm.propTypes = {
    frequencyTimeList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    frequencyTime: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    trackedItemList: PropTypes.arrayOf(
      PropTypes.shape(
        {
          id: PropTypes.number,
          name: PropTypes.string,
        },
      ),
    ).isRequired,
    trackedItemId: PropTypes.string.isRequired,
  };
  PieceForm.displayName = 'PieceForm';
  return PieceForm;
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn,
  }),
}));

const initStore = {
  trackedItem: {
    list: [{
      id: 1,
      name: 'Mock Tracked Item',
    }],
  },
};

const mockStore = configureStore();
const store = mockStore(initStore);
store.dispatch = jest.fn();

let renderReadyComponent;
let setState;
let useStateSpy;

beforeEach(() => {
  setState = jest.fn();
  useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => ([init, setState]));
  renderReadyComponent = (
    <Provider store={store}>
      <PieceFormContainer />
    </Provider>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<PieceFormContainer />', () => {
  it('renders PieceForm', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Mock PieceForm/i)).toBeInTheDocument();
    expect(screen.getByText(/\[\["Day","86400"\],\["Week","604800"\]\]/i)).toBeInTheDocument();
  });

  it('imports data from store', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/\[{"id":1,"name":"Mock Tracked Item"}\]/i)).toBeInTheDocument();
  });

  it('triggers useEffect', () => {
    render(renderReadyComponent);

    expect(setState).toHaveBeenCalledTimes(1);
  });

  it('triggers useEffect', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('triggers handleChange if name is changed', () => {
    render(renderReadyComponent);

    userEvent.type(screen.getByPlaceholderText(/name/i), '1');
    expect(setState).toHaveBeenCalledTimes(2);
    expect(setState).toHaveBeenCalledWith('name1');
  });

  it('triggers handleChange if frequencyTime is changed', () => {
    render(renderReadyComponent);

    userEvent.type(screen.getByPlaceholderText(/frequencyTime/i), '1');
    expect(setState).toHaveBeenCalledTimes(2);
    expect(setState).toHaveBeenCalledWith('frequencyTime864001');
  });

  it('triggers handleSubmit if submit is clicked', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByText('Submit'));
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);

    expect(renderedContainer).toMatchSnapshot();
  });
});
