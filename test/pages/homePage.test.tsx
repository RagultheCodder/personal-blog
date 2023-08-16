import { render } from '@testing-library/react';
import HomePage from '../../src/pages/home/HomePage';

describe('HomePage', () => {
  test('Render Home Page', () => {
    const { getByText } = render(<HomePage />);
    const para = getByText(
      'Get started today and experience the convenience of Academic Electronic Health Records !',
    );
    expect(para).toBeInTheDocument();
  });
});
