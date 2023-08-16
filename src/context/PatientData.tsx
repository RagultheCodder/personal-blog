import { createContext, useContext } from 'react';
import { ChildrenType } from '../interface/patientCareDetails.interface';

const initalState = {
  patientBasicDetails: {
    familyName: null,
    givenName: '',
    dob: new Date(),
    address: '',
    gender: '',
    URN: '',
    age: '0',
  },
};

const PatientDataContext = createContext(initalState);

export const usePatientDataContext = () => useContext(PatientDataContext);

const PatientDataContextProvider = ({ children }: ChildrenType) => {
  return (
    <PatientDataContext.Provider value={initalState}>
      {children}
    </PatientDataContext.Provider>
  );
};

export default PatientDataContextProvider;
