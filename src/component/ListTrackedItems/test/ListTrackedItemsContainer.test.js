import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import ListTrackedItemsContainer from '../ListTrackedItemsContainer';

jest.mock('../ListTrackedItems', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const ListTrackedItems = ({
    trackedItems, handleClickCreateTrackedItem, handleChange, handleClickShowAll, name,
  }) => (
    <div>
      Mock ListTrackedItems
      {JSON.stringify(trackedItems)}
      <button type="button" onClick={handleClickCreateTrackedItem}>Create Tracked Item</button>
      <button type="button" onClick={handleClickShowAll}>Show All</button>
      <input type="text" value={name} onChange={handleChange} placeholder="name" />
    </div>
  );
  ListTrackedItems.displayName = 'ListTrackedItems';
  ListTrackedItems.propTypes = {
    trackedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleClickCreateTrackedItem: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleClickShowAll: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };
  return ListTrackedItems;
});

const initStore = {
  trackedItem: { list: ['First Tracked Item', 'Second Tracked Item'] },
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
  useStateSpy.mockImplementation(() => (['Mock Name', setState]));
  renderReadyComponent = (
    <Provider store={store}>
      <ListTrackedItemsContainer />
    </Provider>
  );
});

describe('<ListTrackedItemsContainer />', () => {
  it('import data from store', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/First Tracked Item/i)).toBeInTheDocument();
    expect(screen.getByText(/Second Tracked Item/i)).toBeInTheDocument();
  });

  it('triggers useEffect when the component is rendered for the first time', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('calls handleClickCreateTrackedItem when \'Create Tracked Item\'', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByText(/Create Tracked Item/i));
    expect(store.dispatch).toHaveBeenCalledTimes(3);
  });

  it('calls handleClickShowAll when \'Show All\'', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByText(/Show All/i));
    expect(store.dispatch).toHaveBeenCalledTimes(3);
  });

  it('calls handleClickShowAll when \'Show All\'', () => {
    useStateSpy.mockImplementation(() => (['Mock Name', setState]));
    render(renderReadyComponent);

    userEvent.type(screen.getByPlaceholderText(/name/i), '1');
    expect(setState.mock.calls).toEqual([['Mock Name1']]);
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
