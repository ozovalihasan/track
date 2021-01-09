import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import ToggleShowHide from '../ToggleShowHide';

const component = (<div>Mock Component</div>);
const showList = false;
let handleClick;
let renderReadyComponent;

beforeEach(() => {
  handleClick = jest.fn();

  renderReadyComponent = (
    <ToggleShowHide
      component={component}
      showList={showList}
      handleClick={handleClick}

    />
  );
});

afterEach(() => {
  handleClick.mockClear();
});

describe('<ToggleShowHide />', () => {
  it('calls handleClick when rendered trackedItem.name is clicked', () => {
    render(renderReadyComponent);

    userEvent.click(screen.getByText(/Show/i));
    expect(handleClick).toHaveBeenCalled();
  });

  describe('If showList is false', () => {
    it('doesn\'t render component', () => {
      render(renderReadyComponent);

      expect(screen.queryByText(/Mock Component/i)).not.toBeInTheDocument();
    });

    it('renders correctly', () => {
      const renderedContainer = render(renderReadyComponent);
      expect(renderedContainer).toMatchSnapshot();
    });
  });

  describe('If showList is false', () => {
    it('renders component if showList is true', () => {
      render(<ToggleShowHide
        component={component}
        showList
        handleClick={handleClick}
      />);

      expect(screen.getByText(/Mock Component/i)).toBeInTheDocument();
    });
    it('renders correctly', () => {
      const renderedContainer = render(<ToggleShowHide
        component={component}
        showList
        handleClick={handleClick}
      />);
      expect(renderedContainer).toMatchSnapshot();
    });
  });
});
