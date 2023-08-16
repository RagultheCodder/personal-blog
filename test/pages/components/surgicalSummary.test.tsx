import { render, screen } from '@testing-library/react';
import SurgicalSummary from '../../../src/components/SurgicalSummary';

describe('SurgicalSummary', () => {
  test('it renders Surgical Summary component', async () => {
    render(<SurgicalSummary />);
    const textElement = await screen.findByText(
      'Surgery Performed/Procedure name',
    );
    expect(textElement?.textContent).toBe('Surgery Performed/Procedure name *');
    screen.getByText('Surgery Date').click();
    expect(screen.getByText('Surgery Date')).toBeEnabled();
  });
});
