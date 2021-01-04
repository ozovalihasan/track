import { render, screen } from '@testing-library/react';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import ErrorContainer from '../ErrorContainer';

const initStore = { api: { error: { message: 'There is an error' } } };
const mockStore = configureStore();

const store = mockStore(initStore);

store.dispatch = jest.fn();

const renderReadyComponent = (
  <Provider store={store}>
    <ErrorContainer />
  </Provider>
);

describe('<ErrorContainer />', () => {
  it('is triggering handleError if there is an error related to img tag', () => {
    render(renderReadyComponent);
    expect(screen.getByText(/There is an error/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
