import { render, screen } from '@testing-library/react';
import PatientMedicalSummary from '../../../src/components/MedicalSummary';

describe('MedicalSummary', () => {
  test('it renders Medical Summary component', async() => {
    render(<PatientMedicalSummary />);
    const textElement = await screen.findByText('Dose Information');
    expect(textElement?.textContent).toBe('Dose Information *');
  });
});

