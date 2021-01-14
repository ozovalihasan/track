import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import Menu from '../Menu';

const isTherePiece = false;
let renderReadyComponent;
beforeEach(() => {
  renderReadyComponent = (
    <BrowserRouter>
      <Menu isTherePiece={isTherePiece} />
      <Redirect to="/test" />
      <Switch>
        <Route exact path="/" render={() => <>Main Page</>} />
        <Route exact path="/test" render={() => <>Test Page</>} />
        <Route exact path="/list-taken-times" render={() => <div>List Taken Times Page</div>} />
        <Route exact path="/your-progress" render={() => <div>Your Progress Page</div>} />
        <Route exact path="/profile" render={() => <div>Profile Page</div>} />
      </Switch>
    </BrowserRouter>
  );
});

describe('<Menu />', () => {
  it('redirects to \'/\' when \'Add Check\' is clicked', () => {
    render(renderReadyComponent);

    userEvent.click(screen.getByText(/Add Check/i));
    expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
  });
  it('redirects to \'/lis-taken-times\' when \'Track.it\' is clicked', () => {
    render(renderReadyComponent);

    userEvent.click(screen.getByText(/Track.it/i));
    expect(screen.getByText(/List Taken Times Page/i)).toBeInTheDocument();
  });
  it('redirects to \'/your-progress\' when \'Your Progress\' is clicked', () => {
    render(renderReadyComponent);

    userEvent.click(screen.getByText(/Your Progress/i));
    expect(screen.getByText(/Your Progress Page/i)).toBeInTheDocument();
  });
  it('redirects to \'/profile\' when \'More\' is clicked', () => {
    render(renderReadyComponent);

    userEvent.click(screen.getByText(/More/i));
    expect(screen.getByText(/Profile Page/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
