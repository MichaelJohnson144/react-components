import { render, screen } from '@testing-library/react';
import SectionMenuItem from './SectionMenuItem';
import userEvent from '@testing-library/user-event';

describe('SectionMenuItem component', function () {
  it('should render a section menu component of elements successfully', function () {
    render(<SectionMenuItem item={{ anchor: 'test-link', label: 'testItem' }} />);
    const link = screen.getByText('testItem');
    expect(link).toBeTruthy();
  });

  it("should render the section menu's items' links successfully", function () {
    render(<SectionMenuItem item={{ anchor: 'test-link', label: 'testItem' }} />);
    const link: HTMLAnchorElement = screen.getByText('testItem');
    expect(link.href).toBeTruthy();
  });

  it('should be able to call onClick once successfully', async function () {
    const onClick = jest.fn();
    render(
      <SectionMenuItem
        item={{ anchor: 'test-link', label: 'testItem' }}
        onClick={onClick}
      />,
    );
    const navigation = screen.getByRole('link');
    await userEvent.click(navigation);
    expect(navigation).toBeTruthy();
    expect(onClick).toBeCalledTimes(1);
  });
});
