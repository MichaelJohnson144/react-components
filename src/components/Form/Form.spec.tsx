import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form component', function () {
  it('should render a form component of elements successfully', function () {
    render(<Form />);
    const form = screen.queryAllByRole('heading');
    expect(form).toBeTruthy();
  });
});
