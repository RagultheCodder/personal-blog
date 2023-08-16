import { render, screen, fireEvent } from '@testing-library/react';
import PatientOnboard from '../../../src/pages/patient/PatientOnboard';

describe('patientOnboard', () => {
  test('it renders patient onboarding component', async () => {
    render(<PatientOnboard />);
    const textElement = await screen.getByText('Residential Address');
    expect(textElement).toBeInTheDocument();
    screen.getByText('Date of Birth').click();
    expect(screen.getByText('Date of Birth')).toBeEnabled();
    const selectElement = await screen.getByText('Sex');
    const optionSelect = fireEvent.mouseDown(selectElement);
    expect(optionSelect).toBeTruthy();
  });
});
