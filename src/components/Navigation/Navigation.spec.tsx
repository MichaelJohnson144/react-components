import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation component', function () {
  it('should render a navigation component comprised of elements successfully', function () {
    render(<Navigation />);
    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeTruthy();
  });
});
