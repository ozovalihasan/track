import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import UserFormContainer from '../UserFormContainer';

jest.mock('../UserForm', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const UserForm = ({
    handleSubmit,
    handleChange,
    username,
    password,
    buttonName,
  }) => (
    <>
      Mock UserForm
      {buttonName}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" value={`username${username}`} onChange={handleChange} />
        <input type="text" name="password" placeholder="password" value={`password${password}`} onChange={handleChange} />
        <button type="submit">
          Submit
        </button>
      </form>

    </>
  );

  UserForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
  };
  UserForm.displayName = 'UserForm';
  return UserForm;
});

const mockStore = configureStore();
const store = mockStore();
store.dispatch = jest.fn();

let renderReadyComponent;
let setState;
let useStateSpy;
const fetchUser = jest.fn();
const buttonName = 'Mock Button Name';

beforeEach(() => {
  setState = jest.fn();
  useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);
  renderReadyComponent = (
    <Provider store={store}>
      <UserFormContainer fetchUser={fetchUser} buttonName={buttonName} />
    </Provider>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<UserFormContainer />', () => {
  it('renders UserForm', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Mock UserForm/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Button Name/i)).toBeInTheDocument();
  });

  it('triggers handleChange if username is changed', () => {
    render(renderReadyComponent);

    userEvent.type(screen.getByPlaceholderText(/username/i), '1');
    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledWith('username1');
  });

  it('triggers handleChange if password is changed', () => {
    render(renderReadyComponent);

    userEvent.type(screen.getByPlaceholderText(/password/i), '1');
    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledWith('password1');
  });

  it('triggers handleSubmit if submit button is clicked', () => {
    useStateSpy.mockImplementation(init => [`mock${init}`, setState]);
    render(renderReadyComponent);

    userEvent.click(screen.getByText('Submit'));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);

    expect(renderedContainer).toMatchSnapshot();
  });
});
