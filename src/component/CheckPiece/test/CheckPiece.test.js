import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CheckPiece from '../CheckPiece';

const piece = { name: 'Piece Name' };

let renderReadyComponent;
let handleClickCreate;
let handleClickDelete;

beforeEach(() => {
  handleClickCreate = jest.fn();
  handleClickDelete = jest.fn();
  renderReadyComponent = (
    <CheckPiece
      piece={piece}
      handleClickCreate={handleClickCreate}
      handleClickDelete={handleClickDelete}
    />
  );
});

afterEach(() => {
  handleClickCreate.mockClear();
  handleClickDelete.mockClear();
});

describe('<CheckPiece />', () => {
  it('triggers handleClickDelete when \'Cancel\' is clicked', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Cancel/i));
    expect(handleClickDelete.mock.calls.length).toBe(1);
  });

  it('triggers handleClickCreate when \'Piece Name\' is clicked', () => {
    render(<CheckPiece
      piece={piece}
      handleClickCreate={handleClickCreate}
      handleClickDelete={handleClickDelete}
    />);

    expect(screen.getByText(/[+1]/i)).toBeInTheDocument();
    expect(screen.getByText(/Piece Name/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Piece Name/i));
    expect(handleClickCreate.mock.calls.length).toBe(1);
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
