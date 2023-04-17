import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import Profile from '../Profile';

const user = { username: 'Mock Username' };

let handleClick;
let renderReadyComponent;

beforeEach(() => {
  handleClick = jest.fn();
  renderReadyComponent = (
    <BrowserRouter>
      <Profile user={user} handleClick={handleClick} />
      <Redirect to="/" />
      <Switch>
        <Route exact path="/" render={() => <>Main Page</>} />
        <Route exact path="/log-in" render={() => <>Log In Page</>} />
        <Route exact path="/sign-up" render={() => <div>Sign Up Page</div>} />
      </Switch>
    </BrowserRouter>
  );
});

afterEach(() => {
  handleClick.mockClear();
});

describe('<Profile />', () => {
  describe('If user.username is not empty', () => {
    it('renders user.username', () => {
      render(renderReadyComponent);

      expect(screen.getByText(/Mock Username/i)).toBeInTheDocument();
    });

    it('calls handleClick when \'Logout\' is clicked', () => {
      render(renderReadyComponent);
      userEvent.click(screen.getByText(/Logout/i));

      expect(handleClick).toHaveBeenCalled();
    });

    it('renders correctly', () => {
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });

  describe('If user.username is empty', () => {
    it('redirects \'/log-in\' when \'Login\' is clicked', () => {
      user.username = '';
      render(renderReadyComponent);
      userEvent.click(screen.getByText(/Log in/i));

      expect(screen.getByText(/Log In Page/i)).toBeInTheDocument();
    });

    it('redirects \'/sign-up\' when \'Sign up\' is clicked', () => {
      user.username = '';
      render(renderReadyComponent);
      userEvent.click(screen.getByText(/Sign up/i));

      expect(screen.getByText(/Sign Up Page/i)).toBeInTheDocument();
    });

    it('renders correctly', () => {
      user.username = '';
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
