import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import CheckPieceContainer from '../CheckPieceContainer';

jest.mock('../CheckPiece', () => {
  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types');
  const CheckPiece = ({
    piece,
    handleClickCreate,
    handleClickDelete,
  }) => (
    <div>
      Mock CheckPiece
      {JSON.stringify(piece)}
      <button type="button" onClick={handleClickCreate}>Create Piece</button>
      <button type="button" onClick={handleClickDelete}>Delete Piece</button>
    </div>
  );
  CheckPiece.displayName = 'CheckPiece';
  CheckPiece.propTypes = {
    piece: PropTypes.shape().isRequired,
    handleClickCreate: PropTypes.func.isRequired,
    handleClickDelete: PropTypes.func.isRequired,
  };
  return CheckPiece;
});

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
  it('triggers handleClickCreate when \'Create Piece\' is clicked', () => {
    render(renderReadyComponent);

    userEvent.click(screen.getByText(/Create Piece/i));
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('triggers handleClickDelete when \'Delete Piece\' is clicked', () => {
    render(renderReadyComponent);

    userEvent.click(screen.getByText(/Delete Piece/i));
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
