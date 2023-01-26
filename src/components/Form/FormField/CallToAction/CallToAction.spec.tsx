import { render, screen } from '@testing-library/react';
import CallToAction from './CallToAction';

describe('CallToAction component', function () {
  it('should render a call to action component successfully', function () {
    render(<CallToAction />);
    const callToAction: HTMLHeadingElement[] = screen.queryAllByRole('heading');
    expect(callToAction).toBeTruthy();
  });
});
