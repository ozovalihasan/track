import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import ShortTrackedItem from '../ShortTrackedItem';

const trackedItem = { name: 'Mock Tracked Item Name' };

let renderReadyComponent;
let handleClickChoose;
let handleClickDeleteTrackedItem;

beforeEach(() => {
  handleClickChoose = jest.fn();
  handleClickDeleteTrackedItem = jest.fn();

  renderReadyComponent = (
    <ShortTrackedItem
      trackedItem={trackedItem}
      handleClickChoose={handleClickChoose}
      handleClickDeleteTrackedItem={handleClickDeleteTrackedItem}
    />
  );
});

afterEach(() => {
  handleClickChoose.mockClear();
  handleClickDeleteTrackedItem.mockClear();
});

describe('<ShortTrackedItem />', () => {
  it('calls handleClickChoose when rendered trackedItem.name is clicked', () => {
    render(renderReadyComponent);

    userEvent.click(screen.getByText(/Mock Tracked Item Name/i));
    expect(handleClickChoose).toHaveBeenCalled();
  });

  it('calls handleClickDeleteTrackedItem when \'Delete\' is clicked', () => {
    render(renderReadyComponent);

    userEvent.click(screen.getByText(/Delete/i));
    expect(handleClickDeleteTrackedItem).toHaveBeenCalled();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
