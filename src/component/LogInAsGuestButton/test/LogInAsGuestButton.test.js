import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import LogInAsGuestButton from '../LogInAsGuestButton';

const handleSubmitSpy = jest.fn();
const handleSubmit = e => {
  handleSubmitSpy();
  e.preventDefault();
};

const renderedComponent = () => render(
  <LogInAsGuestButton
    handleSubmit={handleSubmit}
  />,
);

describe('<LogInAsGuestButton />', () => {
  it('call handleSubmit when the form is submitted', () => {
    renderedComponent();

    expect(handleSubmitSpy).not.toHaveBeenCalled();

    userEvent.click(screen.getByText(/Log in as guest/i));

    expect(handleSubmitSpy).toHaveBeenCalled();
  });


  it('renders correctly', () => {
    expect(renderedComponent()).toMatchSnapshot();
  });
});
