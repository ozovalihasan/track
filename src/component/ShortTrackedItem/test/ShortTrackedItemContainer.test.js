import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ShortTrackedItemContainer from '../ShortTrackedItemContainer';

jest.mock('../ShortTrackedItem', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const ShortTrackedItem = ({
    trackedItem,
    handleClickDeleteTrackedItem,
    handleClickChoose,
  }) => (
    <>
      Mock ShortTrackedItem
      {JSON.stringify(trackedItem)}
      <button type="button" onClick={handleClickDeleteTrackedItem}>Delete Tracked Item</button>
      <button type="button" onClick={handleClickChoose}>Choose Tracked Item</button>

    </>
  );

  ShortTrackedItem.propTypes = {
    handleClickDeleteTrackedItem: PropTypes.func.isRequired,
    handleClickChoose: PropTypes.func.isRequired,
    trackedItem: PropTypes.shape().isRequired,
  };
  ShortTrackedItem.displayName = 'ShortTrackedItem';
  return ShortTrackedItem;
});

const mockStore = configureStore();
const store = mockStore();
store.dispatch = jest.fn();

const trackedItem = { name: 'Mock Tracked Item' };
let renderReadyComponent;

beforeEach(() => {
  renderReadyComponent = (
    <Provider store={store}>
      <ShortTrackedItemContainer trackedItem={trackedItem} />
    </Provider>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<ShortTrackedItemContainer />', () => {
  it('renders Profile', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Mock ShortTrackedItem/i)).toBeInTheDocument();
  });

  it('triggers handleClickDeleteTrackedItem if \'Delete Tracked Item\' is clicked', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalledTimes(0);

    userEvent.click(screen.getByText(/Delete Tracked Item/));

    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it('triggers handleClickChoose if \'Choose Tracked Item\' is clicked', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalledTimes(0);

    userEvent.click(screen.getByText(/Choose Tracked Item/));

    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);

    expect(renderedContainer).toMatchSnapshot();
  });
});
