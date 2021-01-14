import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ToggleShowHideContainer from '../ToggleShowHideContainer';

const MockChildren = () => (
  <div>Mock Children</div>
);

jest.mock('../ToggleShowHide', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const ToggleShowHide = ({
    childComponent,
    handleClick,
    showList,
  }) => (
    <>
      Mock ToggleShowHide
      {(childComponent)}
      {`showList: ${showList}`}
      <button type="button" onClick={handleClick}>Click Button</button>

    </>
  );

  ToggleShowHide.propTypes = {
    childComponent: PropTypes.element.isRequired,
    handleClick: PropTypes.func.isRequired,
    showList: PropTypes.bool.isRequired,
  };
  ToggleShowHide.displayName = 'ToggleShowHide';
  return ToggleShowHide;
});

const initStore = {
  app: { showList: true },
  trackedItem: {
    chosen: {
      trackedItem: {
        name: 'Mock Name',
      },
    },
  },
};

const mockStore = configureStore();
const store = mockStore(initStore);
store.dispatch = jest.fn();

let renderReadyComponent;

beforeEach(() => {
  renderReadyComponent = (
    <Provider store={store}>
      <ToggleShowHideContainer>
        <MockChildren />
      </ToggleShowHideContainer>
    </Provider>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<ToggleShowHideContainer />', () => {
  it('renders ToggleShowHide and MockChildren', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Mock ToggleShowHide/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Children/i)).toBeInTheDocument();
  });

  it('imports data from store', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/showList: true/i)).toBeInTheDocument();
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
