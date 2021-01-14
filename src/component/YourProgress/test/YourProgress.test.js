import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import YourProgress from '../YourProgress';

jest.mock('react-chartjs-2');

const pieces = [{
  id: 1,
  name: 'First Mock Piece',
  tracked_item_id: 1,
  frequency: 3,
  created_at: 946684800001,
  frequency_time: 604800,
  percentageTakenTimes: [0, 66.66666666666666],
}, {
  id: 2,
  name: 'Second Mock Piece',
  tracked_item_id: 2,
  frequency: 2,
  created_at: 94668480002,
  frequency_time: 604800,
  percentageTakenTimes: [0, 50, 0],
}];

const renderedComponent = () => render(
  <YourProgress
    pieces={pieces}
  />,
);

describe('<YourProgress />', () => {
  it('renders pieces', () => {
    renderedComponent();

    expect(screen.getByText(/First Mock Piece/i)).toBeInTheDocument();
    expect(screen.getByText(/Second Mock Piece/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    expect(renderedComponent()).toMatchSnapshot();
  });
});
