import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', function () {
  it('should render a React app successfully', function () {
    render(<App />);
    const app = screen.getByTestId('app');
    expect(app).toBeTruthy();
  });
});
