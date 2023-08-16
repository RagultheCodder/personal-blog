import { render } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  test('renders app component', () => {
    render(<App />);
    const textElement = document.querySelector('.text-center');
    expect(textElement).toBeInTheDocument();
    expect(textElement?.textContent).toBe('+ Add Patient');
  });
});
