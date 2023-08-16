import { render } from '@testing-library/react';
import PatientSummary from '../../../src/pages/patient/Summary';

describe('PatientSummary', () => {
  test('it renders patient summary component', () => {
    render(<PatientSummary />);
    const textElement = document.querySelector('.font-style');
    expect(textElement?.textContent).toBe('Medication Name *');
  });
});
