import { render, screen } from '@testing-library/react';
import SocialMedia from './SocialMedia';

describe('SocialMedia component', function () {
  it('should render a list of social media components icons successfully', function () {
    render(<SocialMedia />);
    const socialMedia = screen.queryAllByRole('link');
    expect(socialMedia).toBeTruthy();
  });
});
