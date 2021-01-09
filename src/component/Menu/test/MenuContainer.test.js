import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import MenuContainer from '../MenuContainer';

jest.mock('../Menu', () => {
  const Menu = () => (<>Mock Menu</>);
  Menu.displayName = 'Menu';

  return Menu;
});

let renderReadyComponent;

beforeEach(() => {
  renderReadyComponent = (
    <MenuContainer />
  );
});

describe('<MenuContainer />', () => {
  it('renders Menu', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Mock Menu/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
