import { render } from '@testing-library/react';
import Header from '../../src/components/Header';

const mockUseNavigate = jest.fn();
const mockUseLocation = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockUseNavigate,
  useLocation: () => mockUseLocation,
}));

describe('Header Component', () => {
  test('It Render Header Text', () => {
    render(<Header />);
    const headerHead = document.querySelector('.header-text');
    expect(headerHead?.textContent).toBe('AEHR - Student Dashboard');
  });

  test('It Render Header Text', () => {
    render(<Header />);
    const headerHead = document.querySelector('.header-button');
    expect(headerHead?.textContent).toBe('+ Add Patient');
  });
});
