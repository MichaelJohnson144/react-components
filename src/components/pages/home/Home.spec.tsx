import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', function () {
  it('should render a home component successfully', function () {
    render(<Home />);
    const home = screen.getByTestId('home');
    expect(home).toBeTruthy();
  });
});
