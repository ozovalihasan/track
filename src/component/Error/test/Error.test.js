import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Error from '../Error';

const error = 'There is an error';
let renderReadyComponent;

beforeEach(() => {
  renderReadyComponent = (
    <Error error={error} />
  );
});

describe('<Error />', () => {
  it('links to root page', () => {
    render(renderReadyComponent);
    expect(screen.getByText(/There is an error/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
