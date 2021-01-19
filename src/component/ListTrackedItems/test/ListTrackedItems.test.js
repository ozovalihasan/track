import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ListTrackedItems from '../ListTrackedItems';

jest.mock('../../ShortTrackedItem/ShortTrackedItemContainer', () => {
  const ShortTrackedItemContainer = () => (<div>Mock ShortTrackedItemContainer</div>);
  ShortTrackedItemContainer.displayName = 'ShortTrackedItemContainer';
  return ShortTrackedItemContainer;
});

let trackedItems = [
  { id: 1, name: 'First Tracked Item' },
  { id: 2, name: 'Second Tracked Item' },
];

const name = 'new tracked item';

let renderReadyComponent;

let handleClickCreateTrackedItem;
let handleChange;
let handleClickShowAll;

beforeEach(() => {
  handleClickCreateTrackedItem = jest.fn();
  handleChange = jest.fn();
  handleClickShowAll = jest.fn();
  renderReadyComponent = (
    <ListTrackedItems
      trackedItems={trackedItems}
      name={name}
      handleClickCreateTrackedItem={handleClickCreateTrackedItem}
      handleChange={handleChange}
      handleClickShowAll={handleClickShowAll}
    />
  );
});

afterEach(() => {
  handleClickCreateTrackedItem.mockClear();
  handleChange.mockClear();
  handleClickShowAll.mockClear();
});

describe('<ListTrackedItems />', () => {
  it('renders ShortTrackedItemContainer', () => {
    render(renderReadyComponent);
    expect(screen.queryAllByText(/Mock ShortTrackedItemContainer/i).length).toBe(2);
  });

  it('triggers handleClickCreateTrackedItem when \'Create\' is clicked', () => {
    render(renderReadyComponent);
    userEvent.click(screen.getByText(/Create/i));
    expect(handleClickCreateTrackedItem.mock.calls.length).toBe(1);
  });

  it('triggers handleClickShowAll when \'Track All\' is clicked', () => {
    render(renderReadyComponent);
    userEvent.click(screen.getByText(/Track All/i));
    expect(handleClickShowAll.mock.calls.length).toBe(1);
  });

  it('triggers handleChange when input is changed', () => {
    render(renderReadyComponent);

    expect(handleChange.mock.calls.length).toBe(0);
    userEvent.type(screen.getByDisplayValue(/new tracked item/i), '1');
    expect(handleChange.mock.calls.length).toBe(1);
  });

  it('does not show if trackedItems is empty', () => {
    trackedItems = [];
    render(<ListTrackedItems
      trackedItems={trackedItems}
      name={name}
      handleClickCreateTrackedItem={handleClickCreateTrackedItem}
      handleChange={handleChange}
      handleClickShowAll={handleClickShowAll}
    />);
    expect(screen.queryByText(/Track All/i)).not.toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
