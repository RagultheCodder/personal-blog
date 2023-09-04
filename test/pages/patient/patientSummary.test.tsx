import { render } from '@testing-library/react';
import PatientSummary from '../../../src/pages/patient/Summary';

beforeEach(() => {
  jest.mock('../../../src/assets/svg/index.tsx', () => {
    return {
      default: jest.fn(() => <div>Mocked Plus</div>),
    };
  });
});

describe('PatientSummary', () => {
  test('it renders patient summary component', () => {
    render(<PatientSummary />);
    const textElement = document.querySelector('.font-style');
    expect(textElement?.textContent).toBe('Medication Name *');
  });
});
