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
  const UserFormContainer = () => (
    <div>
      Mock UserFormContainer
    </div>
  );
  UserFormContainer.displayName = 'UserFormContainer';

  return UserFormContainer;
});

const initStore = { user: { username: '' } };
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
  it('renders UserFormContainer if username is empty', () => {
    render(renderReadyComponent);
    expect(screen.getByText(/Mock UserFormContainer/i)).toBeInTheDocument();
    expect(screen.getByText(/Second Page/i)).toBeInTheDocument();
    expect(screen.queryByText(/Main Page/i)).not.toBeInTheDocument();
  });

  it('redirect to \'/\'', () => {
    initStore.user.username = 'mockName';
    render(renderReadyComponent);

    expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
    expect(screen.queryByText(/Second Page/i)).not.toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
