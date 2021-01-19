import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AddCheck from '../AddCheck';

jest.mock('../../ListPieces/ListPiecesContainer', () => {
  const ListPiecesContainer = () => (<div>Mock ListPiecesContainer </div>);
  ListPiecesContainer.displayName = 'ListPiecesContainer';
  return ListPiecesContainer;
});

jest.mock('../../CheckPiece/CheckPieceContainer', () => {
  const CheckPieceContainer = () => (<div>Mock CheckPieceContainer </div>);
  CheckPieceContainer.displayName = 'CheckPieceContainer';
  return CheckPieceContainer;
});

describe('<AddCheck />', () => {
  it('renders a link to create a piece page', () => {
    render(
      <BrowserRouter>
        <AddCheck />
        <Redirect to="/" />
        <Switch>
          <Route exact path="/" render={() => <>Main Page</>} />
          <Route exact path="/one-piece-create" render={() => <div>One Piece Create Page</div>} />
        </Switch>
      </BrowserRouter>,
    );

    expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
    expect(screen.queryByText(/One Piece Create Page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByText(/[+]/i));
    expect(screen.queryByText(/Main Page/i)).not.toBeInTheDocument();
    expect(screen.getByText(/One Piece Create Page/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(
      <BrowserRouter>
        <AddCheck />
      </BrowserRouter>,
    );
    expect(renderedContainer).toMatchSnapshot();
  });
});
