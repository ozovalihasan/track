import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import ToggleShowHide from '../ToggleShowHide';

const childComponent = (<div>Mock Component</div>);
let showList = false;
const handleClick = jest.fn();
const chosenTrackedItem = 'Mock Tracked Item Name';
const renderedComponent = showList => (
  render(<ToggleShowHide
    childComponent={childComponent}
    showList={showList}
    handleClick={handleClick}
    chosenTrackedItem={chosenTrackedItem}
  />)
);

afterEach(() => {
  handleClick.mockClear();
});

describe('<ToggleShowHide />', () => {
  it('calls handleClick when rendered trackedItem.name is clicked', () => {
    renderedComponent(showList);

    userEvent.click(screen.getByText(/Mock Tracked Item Name/i));
    expect(handleClick).toHaveBeenCalled();
  });

  describe('If showList is false', () => {
    it('doesn\'t render child component', () => {
      showList = false;
      renderedComponent(showList);

      expect(screen.queryByText(/Mock Component/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      showList = false;
      const renderedContainer = renderedComponent(showList);
      expect(renderedContainer).toMatchSnapshot();
    });
  });

  describe('If showList is true', () => {
    it('renders component', () => {
      showList = true;
      renderedComponent(showList);

      expect(screen.getByText(/Mock Component/i)).toBeInTheDocument();
    });

    it('renders correctly', () => {
      showList = true;
      const renderedContainer = renderedComponent(showList);

      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
