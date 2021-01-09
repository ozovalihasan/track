import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import PropTypes from 'prop-types';
import ListPieces from '../ListPieces';

const MockChildren = ({ piece }) => (
  <div>{piece.name}</div>
);

MockChildren.propTypes = {
  piece: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }).isRequired,
};

const pieces = [
  { id: 1, name: 'First Piece' },
  { id: 2, name: 'Second Piece' },
];

const piece = { };
let renderReadyComponent;

beforeEach(() => {
  renderReadyComponent = (
    <ListPieces pieces={pieces}>
      <MockChildren piece={piece} />
    </ListPieces>
  );
});

describe('<ListPieces />', () => {
  it('renders children with pieces', () => {
    render(renderReadyComponent);
    expect(screen.getByText(/First Piece/i)).toBeInTheDocument();
    expect(screen.getByText(/Second Piece/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
