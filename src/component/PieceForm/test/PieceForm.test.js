import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import PieceForm from '../PieceForm';

let renderReadyComponent;
const frequencyTimeList = [['Day', '86400'], ['Week', '604800']];
const frequencyTime = '86400';
const frequency = '0';
const name = 'mock name';
const trackedItemList = [
  { id: 1, name: 'First Tracked Item' },
  { id: 2, name: 'Second Tracked Item' },
];
const trackedItemId = '';

let handleChange;
let handleSubmit;
let handleSubmitSpy;

beforeEach(() => {
  handleChange = jest.fn();
  handleSubmitSpy = jest.fn();
  handleSubmit = e => {
    handleSubmitSpy();
    e.preventDefault();
  };
  renderReadyComponent = (
    <PieceForm
      frequencyTimeList={frequencyTimeList}
      frequencyTime={frequencyTime}
      frequency={frequency}
      name={name}
      trackedItemList={trackedItemList}
      trackedItemId={trackedItemId}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
});

afterEach(() => {
  handleChange.mockClear();
  handleSubmitSpy.mockClear();
});

describe('<PieceForm />', () => {
  it('call handleSubmit when the form is submitted', () => {
    render(renderReadyComponent);

    expect(handleSubmitSpy).not.toHaveBeenCalled();
    userEvent.click(screen.getByText(/Create Piece/i));
    expect(handleSubmitSpy).toHaveBeenCalled();
  });

  it('call handleChange when input of name is changed ', () => {
    render(renderReadyComponent);
    expect(handleChange).not.toHaveBeenCalled();
    userEvent.type(screen.getByDisplayValue(/mock name/i), '1');
    expect(handleChange).toHaveBeenCalled();
  });

  it('call handleChange when selected option of trackedItemId is changed ', () => {
    render(renderReadyComponent);
    expect(handleChange).not.toHaveBeenCalled();
    userEvent.selectOptions(screen.getByDisplayValue('Day'), ['Week']);
    expect(handleChange).toHaveBeenCalled();
  });

  it('call handleChange when selected option of frequencyTime is changed ', () => {
    render(renderReadyComponent);
    expect(handleChange).not.toHaveBeenCalled();
    userEvent.selectOptions(screen.getByDisplayValue('Day'), ['Week']);
    expect(handleChange).toHaveBeenCalled();
  });

  it('call handleChange when input of frequency is changed ', () => {
    render(renderReadyComponent);
    expect(handleChange).not.toHaveBeenCalled();
    userEvent.type(screen.getByDisplayValue(/0/i), '1');
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
