import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import ShortTakenTime from '../ShortTakenTime';

const takenTime = { created_at: 10, piece: { name: 'Mock Piece Name' } };

let renderReadyComponent;
let handleClick;

beforeEach(() => {
  handleClick = jest.fn();

  renderReadyComponent = (
    <ShortTakenTime
      takenTime={takenTime}
      handleClick={handleClick}
    />
  );
});

afterEach(() => {
  handleClick.mockClear();
});

describe('<ShortTakenTime />', () => {
  it('renders takenTime', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/1\/1\/1970, 2:00:10 AM/i)).toBeInTheDocument();
  });
  it('call handleClick when \'Cancel\' is submitted', () => {
    render(renderReadyComponent);

    expect(handleClick).not.toHaveBeenCalled();
    userEvent.click(screen.getByText(/Cancel/i));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
