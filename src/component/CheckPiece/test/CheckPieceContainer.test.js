import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import CheckPieceContainer from '../CheckPieceContainer';

const piece = { name: 'Mock Piece Name' };

const mockStore = configureStore();
const store = mockStore();
store.dispatch = jest.fn();

let renderReadyComponent;

beforeEach(() => {
  renderReadyComponent = (
    <Provider store={store}>
      <CheckPieceContainer
        piece={piece}
      />
    </Provider>
  );
});

describe('<CheckPieceContainer />', () => {
  it('triggers handleClickCreate when \'Mock Piece Name\' is clicked', () => {
    render(renderReadyComponent);

    userEvent.click(screen.getByText(/Mock Piece Name/i));
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('triggers handleClickDelete when \'Cancel\' is clicked', () => {
    render(renderReadyComponent);

    userEvent.click(screen.getByText(/Cancel/i));
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
