import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import Error from './Error';

const error = 'There is an error';

describe('<Error />', () => {
  it('links to root page', () => {
    render(
      <Error error={error} />,
    );
    expect(screen.getByText(/There is an error/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Error error={error} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
