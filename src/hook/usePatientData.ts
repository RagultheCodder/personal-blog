import { useState } from 'react';
import { stepers } from '../config/constant';
import { PatientCareNav } from '../interface/patientCareDetails.interface';

interface PatientBasicDataInterface {
  familyName: null | string;
  givenName: null | string;
  dob: Date;
  address: null | string;
  gender: null | string;
  URN: null | string | number;
  age: null | string | number;
}

export interface UsePatientDataHookResult {
  sideNav: PatientCareNav[];
  selectedComponent: number;
  patientBasicDetails: PatientBasicDataInterface;
  handleInput: (
    input1: string,
    input2: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  selectComponent: (value: number) => void;
  handleNext: (value: number) => void;
}

const usePatientData = (): UsePatientDataHookResult => {
  const [sideNav] = useState<PatientCareNav[]>(stepers);
  const [selectedComponent, setSelectedComponent] = useState<number>(1);
  const [patientBasicDetails, setPatientBasicDetails] = useState({
    familyName: null,
    givenName: '',
    dob: new Date(),
    address: '',
    gender: '',
    URN: '',
    age: '0',
  });

  const handleInput = (
    state: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.log(state);
    setPatientBasicDetails({
      ...patientBasicDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = (id: number): void => {
    if (id > sideNav.length) return;
    setSelectedComponent(id);
    for (let progress = 0; progress < id; progress++) {
      sideNav[progress].active = true;
    }
  };

  const selectComponent = (id: number): void => {
    setSelectedComponent(id - 1);
  };

  return {
    sideNav,
    selectedComponent,
    patientBasicDetails,
    handleInput,
    selectComponent,
    handleNext,
  };
};
export default usePatientData;
