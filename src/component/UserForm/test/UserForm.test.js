import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import UserForm from '../UserForm';

jest.mock('../../Profile/ProfileContainer', () => {
  const ProfileContainer = () => (<div>Mock ProfileContainer </div>);
  ProfileContainer.displayName = 'ProfileContainer';
  return ProfileContainer;
});

const username = 'Mock Username';
const password = 'Mock Password';
const buttonName = 'Mock Button Name';

let renderReadyComponent;
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
    <UserForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      username={username}
      password={password}
      buttonName={buttonName}
    />
  );
});

afterEach(() => {
  handleChange.mockClear();
  handleSubmitSpy.mockClear();
});

describe('<UserForm />', () => {
  it('call handleSubmit when the form is submitted', () => {
    render(renderReadyComponent);

    expect(screen.getByText(/Mock ProfileContainer/i)).toBeInTheDocument();
  });

  it('call handleSubmit when the form is submitted', () => {
    render(renderReadyComponent);

    expect(handleSubmitSpy).not.toHaveBeenCalled();
    userEvent.click(screen.getByText(/Mock Button Name/i));
    expect(handleSubmitSpy).toHaveBeenCalled();
  });

  it('call handleChange when input of username is changed ', () => {
    render(renderReadyComponent);
    expect(handleChange).not.toHaveBeenCalled();
    userEvent.type(screen.getByDisplayValue(/Mock Username/i), '1');
    expect(handleChange).toHaveBeenCalled();
  });

  it('call handleChange when input of password is changed ', () => {
    render(renderReadyComponent);
    expect(handleChange).not.toHaveBeenCalled();
    userEvent.type(screen.getByDisplayValue(/Mock Password/i), '1');
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders correctly', () => {
    const renderedContainer = render(renderReadyComponent);
    expect(renderedContainer).toMatchSnapshot();
  });
});
