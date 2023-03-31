import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import LogInAsGuestButtonContainer from '../LogInAsGuestButtonContainer';

jest.mock('../LogInAsGuestButton', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const LogInAsGuestButton = ({
    handleSubmit
  }) => (
    <>
      Mock LogInAsGuestButton
      <form onSubmit={handleSubmit}>
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );

  LogInAsGuestButton.propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };
  
  LogInAsGuestButton.displayName = 'LogInAsGuestButton';
  return LogInAsGuestButton;
});

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const mockStore = configureStore();
const store = mockStore();
store.dispatch = jest.fn();

let renderReadyComponent;
const renderedComponent = () => render(
  <Provider store={store}>
      <LogInAsGuestButtonContainer />
  </Provider>
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('<LogInAsGuestButtonContainer />', () => {
  it('triggers handleSubmit and redirects to \'/\' if submit button is clicked', () => {
    renderedComponent();

    userEvent.click(screen.getByText('Submit'));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });

  it('renders correctly', () => {
    expect(renderedComponent()).toMatchSnapshot();
  });
});
