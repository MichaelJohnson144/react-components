import { render, screen } from '@testing-library/react';
import Button from './Button';
import userEvent from '@testing-library/user-event';

describe('Button ui component', function () {
  it('should render a button ui component successfully', function () {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });

  it('should not disable the Button ui component by default successfully', function () {
    const state = false;
    const fn = jest.fn();
    render(<Button disabled={state} />);
    const button = screen.getByRole('button');
    expect(button).toBeEnabled();
  });

  it('can disable the Button ui component successfully', function () {
    const state = true;
    const fn = jest.fn();
    render(<Button disabled={state} />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
    expect(button).toBeDisabled();
  });

  it('cannot be interfaced with if disabled successfully', async function () {
    const state = true;
    const fn = jest.fn();
    render(<Button disabled={state} onClick={fn} />);
    const button: HTMLInputElement = screen.getByRole('button');
    await userEvent.click(button);
    await userEvent.click(document.body);
    expect(button).toBeDisabled();
    expect(fn).toBeCalledTimes(0);
  });

  it('can fire onClick successfully', async function () {
    const fn = jest.fn();
    render(<Button onClick={fn} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(button).toBeTruthy();
    expect(fn).toBeCalledTimes(1);
  });

  it('should pass a ref through the Button ui component to its child successfully', function () {
    const fn = jest.fn();
    render(<Button ref={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });

  it('can change the size of the Button ui component successfully', function () {
    const sizeProps = 'small' || 'medium' || 'large';
    render(<Button size={sizeProps} />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });
});
