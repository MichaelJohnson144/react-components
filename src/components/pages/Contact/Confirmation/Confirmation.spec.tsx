import { render, screen } from '@testing-library/react';
import Confirmation from './Confirmation';

describe('Confirmation component', function () {
  it('should render a confirmation component successfully', function () {
    render(<Confirmation />);
    const confirmation = screen.getByTestId('confirmation');
    expect(confirmation).toBeTruthy();
  });
});
