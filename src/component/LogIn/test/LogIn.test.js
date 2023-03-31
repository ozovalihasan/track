import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LogIn from '../LogIn';

jest.mock('../../UserForm/UserFormContainer', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const UserFormContainer = ({ fetchUser, buttonName }) => (
    <div>
      {buttonName}
      {fetchUser.name}
      Mock UserFormContainer
    </div>
  );
  UserFormContainer.displayName = 'UserFormContainer';
  UserFormContainer.propTypes = {
    buttonName: PropTypes.string.isRequired,
    fetchUser: PropTypes.func.isRequired,
  };

  return UserFormContainer;
});

jest.mock('../../LogInAsGuestButton/LogInAsGuestButtonContainer', () => {
  const LogInAsGuestButtonContainer = () => (<div>Mock LogInAsGuestButtonContainer </div>);
  LogInAsGuestButtonContainer.displayName = 'LogInAsGuestButtonContainer';
  return LogInAsGuestButtonContainer;
});


const initStore = { user: { } };
const mockStore = configureStore();
const store = mockStore(initStore);

let renderReadyComponent;
beforeEach(() => {
  renderReadyComponent = (
    <BrowserRouter>
      <Provider store={store}>
        <Redirect to="/second-page" />
        <LogIn />
        <Switch>
          <Route exact path="/" render={() => <>Main Page</>} />
          <Route exact path="/second-page" render={() => <div>Second Page</div>} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
});

describe('<LogIn />', () => {
  describe('If username exists', () => {
    it('redirect to \'/\' ', () => {
      initStore.user.username = 'mockName';
      render(renderReadyComponent);

      expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
      expect(screen.queryByText(/Second Page/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      initStore.user.username = 'mockName';
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });

  describe('If username does not exist', () => {
    it('renders UserFormContainer if username is empty', () => {
      initStore.user.username = '';
      render(renderReadyComponent);

      expect(screen.getByText(/Mock UserFormContainer/i)).toBeInTheDocument();
      expect(screen.getByText(/Mock LogInAsGuestButtonContainer/i)).toBeInTheDocument();
      expect(screen.getByText(/Second Page/i)).toBeInTheDocument();
      expect(screen.getByText(/Log In/i)).toBeInTheDocument();
      expect(screen.getByText(/fetchUserLogin/i)).toBeInTheDocument();
      expect(screen.queryByText(/Main Page/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      initStore.user.username = '';
      const renderedContainer = render(renderReadyComponent);

      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
