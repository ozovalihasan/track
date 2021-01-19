import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import ProfileContainer from '../ProfileContainer';

jest.mock('../Profile', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const Profile = ({
    handleClick,
    user,
  }) => (
    <>
      Mock Profile
      {JSON.stringify(user)}
      <button type="button" onClick={handleClick}>Click Button</button>

    </>
  );

  Profile.propTypes = {
    handleClick: PropTypes.func.isRequired,
    user: PropTypes.shape().isRequired,
  };
  Profile.displayName = 'PieceForm';
  return Profile;
});

const initStore = {
  user: { username: 'Mock Username' },
};

const mockStore = configureStore();
const store = mockStore(initStore);
store.dispatch = jest.fn();

let renderReadyComponent;

beforeEach(() => {
  renderReadyComponent = (
    <Provider store={store}>
      <ProfileContainer />
    </Provider>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<ProfileContainer />', () => {
  it('renders Profile', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Mock Profile/i)).toBeInTheDocument();
  });

  it('imports data from store', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/{"username":"Mock Username"}/i)).toBeInTheDocument();
  });

  it('triggers handleClick if \'Click Button\' is clicked', () => {
    render(renderReadyComponent);

    expect(store.dispatch).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByText(/Click Button/));
    expect(store.dispatch).toHaveBeenCalledTimes(6);
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);

    expect(renderedContainer).toMatchSnapshot();
  });
});
