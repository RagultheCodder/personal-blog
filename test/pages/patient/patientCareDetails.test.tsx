import { render, screen } from '@testing-library/react';
import PatientCareDetails from '../../../src/pages/patient/PatientCareDetails';

describe('PatientCare Details', () => {
  test('it renders patient care details component', () => {
    render(<PatientCareDetails />);
    const textElement = screen.getByRole('group');
    expect(textElement).toBeInTheDocument();
  });
});
