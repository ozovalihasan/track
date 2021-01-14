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

const takenTime = {};
const renderReadyComponent = takenTimes => (
  <ListTakenTimes takenTimes={takenTimes}>
    <MockChildren takenTime={takenTime} />
  </ListTakenTimes>
);
beforeEach(() => {

});

describe('<ListTakenTimes />', () => {
  describe('If takenTimes is not empty', () => {
    const takenTimes = [
      { id: 1, name: 'First Taken Time' },
      { id: 2, name: 'Second Taken Time' },
    ];
    it('renders children with taken times', () => {
      render(renderReadyComponent(takenTimes));

      expect(screen.getByText(/First Taken Time/i)).toBeInTheDocument();
      expect(screen.getByText(/Second Taken Time/i)).toBeInTheDocument();
    });
    it('renders correctly', () => {
      const renderedContainer = render(renderReadyComponent(takenTimes));
      expect(renderedContainer).toMatchSnapshot();
    });
  });

  describe('If takenTimes is not empty', () => {
    const takenTimes = [];
    it('shows a text ', () => {
      render(renderReadyComponent(takenTimes));
      expect(screen.getByText(/There is no anything to show/i)).toBeInTheDocument();
    });
    it('renders correctly', () => {
      const renderedContainer = render(renderReadyComponent(takenTimes));
      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
