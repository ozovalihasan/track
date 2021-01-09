import { render } from '@testing-library/react';
import React from 'react';
import AddCheckContainer from '../AddCheckContainer';

jest.mock('../AddCheck', () => {
  const AddCheck = () => (<div>Mock AddCheck </div>);
  AddCheck.displayName = 'AddCheck';
  return AddCheck;
});

describe('<AddCheckContainer />', () => {
  it('renders correctly', () => {
    const renderedContainer = render(
      <AddCheckContainer />,
    );
    expect(renderedContainer).toMatchSnapshot();
  });
});
