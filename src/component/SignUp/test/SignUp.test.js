import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import '@testing-library/jest-dom';

import SignUp from '../SignUp';

jest.mock('../../UserForm/UserFormContainer', () => {
  const UserFormContainer = () => (<div>Mock UserFormContainer</div>);
  UserFormContainer.displayName = 'UserFormContainer';
  return UserFormContainer;
});

let renderReadyComponent;
beforeEach(() => {
  renderReadyComponent = (
    <BrowserRouter>
      <Redirect to="/second-page" />
      <SignUp />
      <Switch>
        <Route exact path="/" render={() => <>Main Page</>} />
        <Route exact path="/second-page" render={() => <div>Second Page</div>} />
      </Switch>
    </BrowserRouter>
  );
});

describe('<SignUp />', () => {
  describe('if token is empty', () => {
    it('renders UserFormContainer if token is empty', () => {
      localStorage.token = '';
      render(renderReadyComponent);
      expect(screen.getByText(/Mock UserFormContainer/i)).toBeInTheDocument();
      expect(screen.getByText(/Second Page/i)).toBeInTheDocument();
      expect(screen.queryByText(/Main Page/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      localStorage.token = '';
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });
  describe('if token isn\'t empty', () => {
    it('redirect to \'/\'', () => {
      localStorage.token = '123';
      render(renderReadyComponent);
      expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
      expect(screen.queryByText(/Second Page/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      localStorage.token = '123';
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
