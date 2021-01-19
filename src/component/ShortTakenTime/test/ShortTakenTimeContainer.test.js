import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ShortTakenTimeContainer from '../ShortTakenTimeContainer';

jest.mock('../ShortTakenTime', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const ShortTakenTime = ({
    handleClick,
    takenTime,
  }) => (
    <>
      Mock ShortTakenTime
      {JSON.stringify(takenTime)}
      <button type="button" onClick={handleClick}>Click Button</button>

    </>
  );

  ShortTakenTime.propTypes = {
    handleClick: PropTypes.func.isRequired,
    takenTime: PropTypes.shape().isRequired,
  };
  ShortTakenTime.displayName = 'ShortTakenTime';
  return ShortTakenTime;
});

const mockStore = configureStore();
const store = mockStore();
store.dispatch = jest.fn();

const takenTime = { name: 'Mock Taken Time' };
let renderReadyComponent;
beforeEach(() => {
  renderReadyComponent = (
    <Provider store={store}>
      <ShortTakenTimeContainer takenTime={takenTime} />
    </Provider>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<ShortTakenTimeContainer />', () => {
  it('renders Profile', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Mock ShortTakenTime/i)).toBeInTheDocument();
  });

  it('triggers handleClick if \'Click Button\' is clicked', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByText(/Click Button/));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);

    expect(renderedContainer).toMatchSnapshot();
  });
});
