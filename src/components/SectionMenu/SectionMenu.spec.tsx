import { render, screen } from '@testing-library/react';
import SectionMenu from './SectionMenu';
import userEvent from '@testing-library/user-event';

describe('SectionMenu component', function () {
  it('should render a section menu component of elements successfully', function () {
    render(<SectionMenu items={[]} />);
    const sectionMenuNavigation = screen.getByRole('navigation');
    expect(sectionMenuNavigation).toBeTruthy();
  });

  it("should render the section menu component's elements successfully", function () {
    render(<SectionMenu items={[{ anchor: 'test-link', label: 'testItem' }]} />);
    const link: HTMLAnchorElement = screen.getByText('testItem');
    expect(link.href).toBeTruthy();
  });

  it('cannot call onChange upon initial page load successfully', async function () {
    const fn = jest.fn();
    render(
      <SectionMenu items={[{ anchor: 'test-link', label: 'testItem' }]} onChange={fn} />,
    );
    const link = screen.getByRole('link');
    await userEvent.click(link);
    expect(link).toBeTruthy();
    expect(fn).not.toBeCalledTimes(0);
  });

  it('can call onChange successfully', async function () {
    const fn = jest.fn();
    render(
      <SectionMenu items={[{ anchor: 'test-link', label: 'testItem' }]} onChange={fn} />,
    );
    const link = screen.getByText('testItem');
    await userEvent.click(link);
    expect(link).toBeTruthy();
    expect(fn).toBeCalledTimes(1);
  });
});
