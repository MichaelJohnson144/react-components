import { render, screen } from '@testing-library/react';
import Input from './Input';
import userEvent from '@testing-library/user-event';

describe('Input component', function () {
  it('should render an input component successfully', function () {
    render(<Input label={'testLabel'} />);
    const input = screen.getByLabelText('testLabel');
    expect(input).toBeTruthy();
  });

  it('should not disable the Input ui component by default successfully', function () {
    const state = false;
    render(<Input disabled={state} label={'testLabel'} />);
    const input = screen.getByLabelText('testLabel');
    expect(input).toBeEnabled();
  });

  it('can disable the Input ui component successfully', function () {
    const state = true;
    render(<Input disabled={state} label={'testLabel'} />);
    const input = screen.getByLabelText('testLabel');
    expect(input).toBeDisabled();
  });

  it('cannot be interfaced with if disabled successfully', async function () {
    const state = true;
    const fn = jest.fn();
    render(
      <Input disabled={state} label={'testLabel'} onChange={fn} value={'testValue'} />,
    );
    const input: HTMLInputElement = screen.getByLabelText('testLabel');
    await userEvent.click(input);
    await userEvent.click(document.body);
    await userEvent.keyboard('testKey');
    expect(input).toBeDisabled();
    expect(fn).toBeCalledTimes(0);
    expect(input.value).toBe('testValue');
  });

  it('can fire onChange successfully', async function () {
    const fn = jest.fn();
    render(<Input label={'testLabel'} onChange={fn} value={'testValue'} />);
    const input: HTMLInputElement = screen.getByLabelText('testLabel');
    expect(input.value).toBe('testValue');
    expect(fn).toBeCalledTimes(0);
  });

  it('can set a default value successfully', function () {
    const fn = jest.fn();
    render(<Input label={'testLabel'} onChange={fn} value={'testValue'} />);
    const input: HTMLInputElement = screen.getByLabelText('testLabel');
    expect(input.value).toBe('testValue');
  });
});
