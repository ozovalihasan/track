import { render, screen } from '@testing-library/react';
import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

jest.mock('../../AddCheck/AddCheckContainer', () => {
  const AddCheckContainer = () => (<div>Mock AddCheckContainer </div>);
  AddCheckContainer.displayName = 'AddCheckContainer';
  return AddCheckContainer;
});

jest.mock('../../Error/ErrorContainer', () => {
  const ErrorContainer = () => (<div>Mock ErrorContainer </div>);
  ErrorContainer.displayName = 'ErrorContainer';
  return ErrorContainer;
});

jest.mock('../../Loading/LoadingContainer', () => {
  const LoadingContainer = () => (<div>Mock LoadingContainer </div>);
  LoadingContainer.displayName = 'LoadingContainer';
  return LoadingContainer;
});

jest.mock('../../ListTakenTimes/ListTakenTimesContainer', () => {
  const ListTakenTimesContainer = () => (<div>Mock ListTakenTimesContainer </div>);
  ListTakenTimesContainer.displayName = 'ListTakenTimesContainer';
  return ListTakenTimesContainer;
});

jest.mock('../../ListTrackedItems/ListTrackedItemsContainer', () => {
  const ListTrackedItemsContainer = () => (<div>Mock ListTrackedItemsContainer </div>);
  ListTrackedItemsContainer.displayName = 'ListTrackedItemsContainer';
  return ListTrackedItemsContainer;
});

jest.mock('../../Menu/Menu', () => {
  const Menu = () => (<div>Mock Menu </div>);
  Menu.displayName = 'Menu';
  return Menu;
});

jest.mock('../../PieceForm/PieceFormContainer', () => {
  const PieceFormContainer = () => (<div>Mock PieceFormContainer </div>);
  PieceFormContainer.displayName = 'PieceFormContainer';
  return PieceFormContainer;
});

jest.mock('../../Profile/ProfileContainer', () => {
  const ProfileContainer = () => (<div>Mock ProfileContainer </div>);
  ProfileContainer.displayName = 'ProfileContainer';
  return ProfileContainer;
});

jest.mock('../../ShortTakenTime/ShortTakenTimeContainer', () => {
  const ShortTakenTimeContainer = () => (<div>Mock ShortTakenTimeContainer </div>);
  ShortTakenTimeContainer.displayName = 'ShortTakenTimeContainer';
  return ShortTakenTimeContainer;
});

jest.mock('../../ToggleShowHide/ToggleShowHideContainer', () => {
  const ToggleShowHideContainer = () => (<div>Mock ToggleShowHideContainer</div>);
  ToggleShowHideContainer.displayName = 'ToggleShowHideContainer';
  return ToggleShowHideContainer;
});

jest.mock('../../YourProgress/YourProgressContainer', () => {
  const YourProgressContainer = () => (<div>Mock YourProgressContainer </div>);
  YourProgressContainer.displayName = 'YourProgressContainer';
  return YourProgressContainer;
});

describe('<App />', () => {
  it('renders ErrorContainer,LoadingContainer,ToggleShowHideContainer, and Menu components', () => {
    render(
      <BrowserRouter>
        <App />
        {/* <Redirect to={{ pathname: '/one-piece-create' }} /> */}
      </BrowserRouter>,
    );

    expect(screen.getByText(/Mock ErrorContainer/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock LoadingContainer/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock ToggleShowHideContainer/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Menu/i)).toBeInTheDocument();
  });

  it('renders AddCheckContainer component when \'/\' is directed', () => {
    render(
      <BrowserRouter>
        <App />
        <Redirect to={{ pathname: '/' }} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Mock AddCheckContainer/i)).toBeInTheDocument();
  });

  it('renders PieceFormContainer component when \'/one-piece-create\' is directed', () => {
    render(
      <BrowserRouter>
        <App />
        <Redirect to={{ pathname: '/one-piece-create' }} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Mock PieceFormContainer/i)).toBeInTheDocument();
  });

  it('renders YourProgressContainer component when \'/your-progress\' is directed', () => {
    render(
      <BrowserRouter>
        <App />
        <Redirect to={{ pathname: '/your-progress' }} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Mock YourProgressContainer/i)).toBeInTheDocument();
  });

  it('renders ProfileContainer component when \'/profile\' is directed', () => {
    render(
      <BrowserRouter>
        <App />
        <Redirect to={{ pathname: '/profile' }} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Mock ProfileContainer/i)).toBeInTheDocument();
  });

  it('renders ListTakenTimesContainer component when \'/list-taken-times\' is directed', () => {
    render(
      <BrowserRouter>
        <App />
        <Redirect to={{ pathname: '/list-taken-times' }} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Mock ListTakenTimesContainer/i)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const renderedContainer = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(renderedContainer).toMatchSnapshot();
  });
});
