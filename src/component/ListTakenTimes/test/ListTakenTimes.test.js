import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import PropTypes from 'prop-types';
import ListTakenTimes from '../ListTakenTimes';

const MockChildren = ({ takenTime }) => (
  <div>{takenTime.name}</div>
);

MockChildren.propTypes = {
  takenTime: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }).isRequired,
};

const takenTimes = [
  { id: 1, name: 'First Taken Time' },
  { id: 2, name: 'Second Taken Time' },
];

let renderReadyComponent;
const takenTime = {};

beforeEach(() => {
  renderReadyComponent = (
    <ListTakenTimes takenTimes={takenTimes}>
      <MockChildren takenTime={takenTime} />
    </ListTakenTimes>
  );
});

describe('<ListTakenTimes />', () => {
  it('renders children with taken times', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/First Taken Time/i)).toBeInTheDocument();
    expect(screen.getByText(/Second Taken Time/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
