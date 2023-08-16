import { ReactElement } from 'react';

interface PatientCareDetails {
  handleNext: (id: number) => void;
  selectedComponent: number;
  isPatientDetails?: boolean;
}

export type { PatientCareDetails };

export interface PatientCareNav {
  id?: number;
  name?: string;
  active?: boolean;
  header?: boolean;
  headerTitle?: string;
}

export interface PatientCareInitalState {
  sideNav: PatientCareNav[];
  selectedComponent: number;
}

export interface PatientCareAction {
  type: 'SET_SELECT_COMPONENT';
  payload: number;
}

export type ChildrenType = {
  children?: ReactElement | undefined;
};

export interface InitContextState {
  state: PatientCareInitalState;
  dispatch: React.Dispatch<PatientCareAction>;
}

export interface SelectInter {
  label: string;
  value: number | string | null;
}

interface RowData {
  medicationName: string | null;
  doseInformation: string | null;
  reason: string | null;
  [key: string]: string | null | SelectInter;
}

export interface Row {
  id: number;
  data: RowData;
}

export interface SeletedComponent {
  selectedComponent: number;
}

export interface MedicationRow {
  id: number;
  data: MedicalData;
}

export interface MedicalData {
  medicationName: RowValues;
  doseInformation: RowValues;
  reason: RowValues;
}

export interface RowValues {
  value: null | string;
  type: string;
}

export interface SurgicalRow {
  id: number;
  data: SurgicalRowData;
}

export interface SurgicalRowData {
  surgeryName: string | null;
  surgeryDate: Date | null;
  reason: string | null;
  [key: string]: string | null | SelectInter | Date;
}
export interface updateByWithDate {
  name: string;
  date: string;
}
export interface StudentTable {
  id: number;
  urn: string;
  givenName: string;
  familyName: string;
  sex: string;
  admittedDate: string;
  updateBy: updateByWithDate;
}

export interface AllergyRow {
  id: number;
  data: AllergyRowData;
}

export interface AllergyRowData {
  substance: string | null;
  reaction: SelectInter;
  symptoms: string | null;
  severity: SelectInter;
  [key: string]: string | null | SelectInter | Date;
}
