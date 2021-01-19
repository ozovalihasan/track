import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Loading from '../Loading';

describe('<ListTrackedItems />', () => {
  it('renders correctly', () => {
    const renderedContainer = render(<Loading />);
    expect(renderedContainer).toMatchSnapshot();
  });
});
