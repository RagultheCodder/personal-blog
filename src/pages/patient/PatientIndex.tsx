import PatientDataContextProvider from '../../context/PatientData';
import PatientCareDetails from './PatientCareDetails';

const PatientIndex = () => {
  return (
    <PatientDataContextProvider>
      <PatientCareDetails />
    </PatientDataContextProvider>
  );
};

export default PatientIndex;
