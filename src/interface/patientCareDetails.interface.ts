import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { SingleValue } from 'react-select';
import SimpleReactValidator from 'simple-react-validator';

interface PatientCareDetails {
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
  enabled?: boolean;
}

export interface PatientCareInitialState {
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
  state: PatientCareInitialState;
  dispatch: React.Dispatch<PatientCareAction>;
}

export interface SelectInter {
  label: string | undefined;
  value: number | string | undefined;
}

export interface RowData {
  id?: number | null | undefined;
  medicationName: string | null;
  doseInformation: string | null;
  reason: string | null;
  [key: string]: string | null | SelectInter | number | undefined | Date;
}

export interface MedicalSummaryData {
  id: number;
  data: RowData;
}

export interface SelectedComponent {
  selectedComponent: number;
}

export interface MedicationRow {
  id: number;
  data: MedicalData;
}

export interface MedicalData {
  id?: number | null | undefined;
  medicationName: string | null;
  doseInformation: string | null;
  reason: string | null;
}

export interface RowValues {
  value: null | string;
  type: string;
}

export interface SurgicalSummaryData {
  id: number;
  data: SurgicalRowData;
}

export interface SurgicalRowData {
  id?: number | null | undefined;
  surgeryName: string | null;
  surgeryDate: Date | null;
  reason: string | null;
  [key: string]: string | null | SelectInter | Date | number | undefined;
}
export interface StudentTable {
  id: number;
  urn: string;
  givenName: string;
  familyName: string;
  sex: string;
  admittedDate: string;
  updateBy: Date;
}

export interface StudentData {
  id: number;
  URN: string;
  given_name: string;
  family_name: string;
  gender: string;
  createdAt: Date;
  updateAt: Date;
  admissionPatient?: {
    admissionDischarge?: null | { id: number; admission_id: number };
  };
}

export interface AllergyData {
  id: number;
  data: AllergyRowData;
}

export interface AllergyRowData {
  id?: number | null;
  substance: string | null;
  reaction: SelectInter;
  symptoms: string | null;
  severity: SelectInter;
  [key: string]: string | null | SelectInter | Date | number | undefined;
}

export interface Diagnosis {
  id: number;
  data: DiagnosisRowData;
}

export interface DiagnosisRowData {
  id?: number;
  diagnosisDate: Date;
  diagnosisSuggested: string;
  suggestedBy: string;
  suggestedOn: Date;
  notes: string;
  [key: string]: string | Date | number | undefined;
}

export interface PatientAllergyData {
  id: number;
  patient_id: number;
  substance: string;
  reaction: string;
  symptoms: string;
  severity: string;
  createdAt: Date;
  updatedAt: Date;
  modifiedBy: null;
  createdBy: null;
}

export interface PatientDetailsAndAdmissionData {
  id: number;
  user_course_id: number;
  gender_id: number;
  URN: string;
  given_name: string;
  family_name: string;
  dob: Date;
  address: string;
  createdBy: Date | null;
  modifiedBy: Date | null;
  createdAt: Date;
  updatedAt: Date;
  gender: string;
  contact_number: string;
  emergency_contact_number: string;
  veteran_status: string;
  country: string;
  religion: string;
  marital_status: string;
  language: string;
  interpreter_required: string;
  social_history: string;
  family_history: string;
  patientAllergy: PatientAllergyData[];
  admissionPatient: AdmissionEditData;
  medicationPatient: MedicationData[];
  surgeryPatient: SurgeryData[];
}

export type DropDownSelectType = {
  value: string | number | undefined;
  label: string | undefined;
};

export type PatientBasic = {
  id?: null | number;
  familyName: null | string;
  givenName: null | string;
  dob: Date;
  address: null | string;
  gender: DropDownSelectType;
  URN: null | string | number;
  age: null | string | number;
};

export type PatientDemographics = {
  contactNumber: string;
  emergencyContact: string;
  status: DropDownSelectType;
  country: DropDownSelectType;
  religion: string;
  maritalStatus: DropDownSelectType;
  language: DropDownSelectType;
  interpreter: DropDownSelectType;
  socialHistory: string;
  familyHistory: string;
};

export type Discharge = {
  treatingDoctor: string;
  modeOfDischarge: DropDownSelectType;
  dischargeDateAndTime: Date;
  dischargeSummary: string;
  transferringFacility: string;
  babyAdmissionWeight: string;
  referralToFurtherCare: string;
  mentalHealthLegalStatusIndicator: string;
  consentToReleasePatientDetails: string;
  criteriaLedDischargeType: string;
  followUpAppointmentMade: DropDownSelectType;
  followUpDateAndTime: Date;
  appointmentMadeNotes: string;
  transportConfirmed: DropDownSelectType;
  transportNotes: string;
  valuablesReturned: DropDownSelectType;
  valuablesNotes: string;
};

export interface Observation {
  id: number;
  data: ObservationRowData;
}

export interface ObservationRowData {
  observationDate: Date;
  temperature: string;
  bloodPressure: string;
  heartRate: string;
  spo: string;
  oxygen: string;
  exercise: string;
  notes: string;
  painLevelNotes: string;
  painLevel: number;
  [key: string]: string | Date | number | undefined;
}

export interface CareRow {
  id: number;
  data: CareData;
}

export interface CareData {
  id?: number;
  careStartDate: Date | null;
  careType: string | null;
  careNotes: string | null;
  [key: string]: string | null | Date | number | undefined;
}

export interface SurgicalRow {
  id: number;
  data: SurgicalData;
}

export interface SurgicalData {
  id?: number;
  surgeryName: string | null;
  surgeryDate: Date | null;
  reason: string | null;
  [key: string]: string | null | Date | number | undefined;
}

export interface Admission {
  id?: number | null;
  admittingDoctor: string;
  admissionTime: Date;
  gp: string;
  medicareNo: string;
  membershipNo: string;
  height: string;
  admissionProcedure: string;
  phoneNumber: string;
  treatingDoctor: string;
  cardNo: string;
  weight: string;
  reasonForAdmission: string;
  insurance: string;
}

export interface NextOfKin {
  name: string;
  kinPhone: string;
  relationship: string;
  address: string;
}

export interface WardData {
  wardNumber: string;
  wardName: string;
  orientationToWard: SelectInter;
}

export interface AidsData {
  id: number;
  data: AidsRow;
}

export interface AidsRow {
  id?: number;
  aidsType: SelectInter;
  aidsReason: string;
  admission_id?: number;
  [key: string]: string | null | Date | number | undefined | SelectInter;
}

export interface AdmissionEditData {
  id: number;
  admitting_doctor: string;
  admitting_date: Date;
  gp: string;
  medicare_no: string;
  patient_height: string;
  admission_procedure: string;
  phone_number: string;
  treating_doctor_at_admission: string;
  card_ref_no: string;
  patient_weight: string;
  reason_for_admission: string;
  health_insurance_no: string;
  membership_no: string;
  ward_number: string;
  ward_name: string;
  orientation_to_ward: string;
  kin_name: string;
  kin_relationship: string;
  kin_phone_number: string;
  kin_address: string;
  createdBy: number;
  modifiedBy: number;
  createdAt: Date;
  updatedAt: Date;
  admissionAids: {
    id?: number;
    aids_name: string;
    aids_reason: string;
    admission_id?: number;
  }[];
  admissionCare: {
    id?: number;
    care_start_date: Date;
    care_type: string;
    care_notes: string;
    admission_id?: number;
  }[];
  admissionClinicalNotes: {
    id?: number;
    admission_id: number;
    note: string;
    date_and_time: Date;
    document_captured_by: string;
  }[];
  admissionDiagnosis: {
    id?: number;
    admission_id: number;
    diagnosis_suggested: string;
    suggested_by: string;
    suggested_on: Date;
    notes: string;
    createdAt: Date;
  }[];
  admissionObservation: {
    id?: number;
    admission_id: number;
    temperature: string;
    blood_pressure: string;
    heart_rate: string;
    spo2: string;
    oxygen_flow_rate: string;
    recording_of_exercise: string;
    pain_level: number;
    pain_level_note: string;
    note: string;
    createdAt: Date;
  }[];
  admissionMedicationRecord: {
    id: number;
    medication_name: string;
    date_ordered: Date;
    dose: string;
    route_of_admin: string;
    frequency: string;
    indication: string;
    prescriber: string;
    status: string;
    admission_id?: number | string;
    record_type: number | null;
  }[];
  admissionMedicationAdminRecord: {
    id: number;
    name: string;
    date: Date;
    route_of_admin: string;
    time: string;
    action: string;
    dose: string;
    signature: string;
    admission_id: number | string;
  }[];
}
export interface PatientData {
  id: number;
  user_course_id: number;
  gender_id: number;
  URN: string;
  given_name: string;
  family_name: string;
  dob: Date;
  address: string;
  createdBy: Date | null;
  modifiedBy: Date | null;
  createdAt: Date;
  updatedAt: Date;
  gender_name: string;
  medicationData: MedicationData[];
  surgeryData: SurgeryData[];
}

export interface SurgeryData {
  id?: number | undefined;
  surgery_name: string;
  surgery_date: Date;
  reason: string;
  patient_id: number;
  createdAt?: Date;
  updatedAt?: Date;
  modifiedBy?: number;
  createdBy?: number;
}

export interface MedicationData {
  id?: number | undefined;
  medication_name: string;
  dose_information: string;
  reason: string;
  patient_id: number;
  createdAt?: Date;
  updatedAt?: Date;
  modifiedBy?: number;
  createdBy?: number;
}

export interface MedicationRecordData {
  id: number;
  data: MedicationRecordRow;
}

export interface MedicationRecordRow {
  id: number | null | undefined;
  name: string | null;
  date_ordered: Date | null;
  dose: string | null;
  route_of_administration: string | null;
  frequency: string | null;
  indication: string | null;
  prescriber: string | null;
  status: SelectInter;
  type?: number | null;
  [key: string]: string | null | Date | number | undefined | SelectInter;
}

export interface MedicationPRNRecordData {
  id: number;
  data: MedicationPRNRecordRow;
}

export interface MedicationPRNRecordRow {
  id: number | null | undefined;
  name: string | null;
  date_ordered: Date | null;
  dose: string | null;
  route_of_administration: string | null;
  frequency: string | null;
  indication: string | null;
  prescriber: string | null;
  status: SelectInter;
  type?: number | null;
  [key: string]: string | null | Date | number | undefined | SelectInter;
}

export interface MedicationAdminRecordData {
  id: number;
  data: MedicationAdminRecordRow;
}

export interface MedicationAdminRecordRow {
  admin_id: number | null | undefined;
  admin_name: SelectInter;
  admin_date: Date | null;
  admin_route_of_administration: string | null | undefined;
  admin_time: string | null;
  admin_action: string | null;
  admin_dose: string | null | undefined;
  admin_signature: string | null;
  [key: string]: string | null | Date | number | undefined | SelectInter;
}
export interface ClinicalNotes {
  id: number;
  data: ClinicalNotesData;
}

export interface ClinicalNotesData {
  id?: number;
  documentCapturedBy: string;
  dateAndTime: Date;
  note: string;
  [key: string]: string | Date | number | undefined;
}

export interface LabTestAndReport {
  id?: number;
  diagnosisType: DropDownSelectType;
  reportUploadDateAndTime: Date;
  diagnosisReportReviewed: string;
  reportName: string;
  report: string | null;
  signatureName: string;
  signature: string | null;
  [key: string]: string | null | SelectInter | Date | number | undefined;
}
export interface LabTestAndReportData {
  id: number;
  data: LabTestAndReport;
}

export type PatientContextType = {
  headerText: string;
  care: CareRow[];
  value: number;
  patientBasicDetails: PatientBasic;
  patientDemographics: PatientDemographics;
  sideNav: PatientCareNav[];
  selectedComponent: number;
  mode: string;
  nextOfKinData: NextOfKin;
  wardData: WardData;
  aidsData: AidsData[];
  allergy: AllergyData[];
  admissionDetails: Admission;
  medicalSummary: MedicalSummaryData[];
  surgicalSummary: SurgicalSummaryData[];
  diagnosis: Diagnosis[];
  observation: Observation[];
  clinicalNotes: ClinicalNotes[];
  labTestAndReport: LabTestAndReportData[];
  discharge: Discharge;
  allergyCheckBox: boolean;
  medicalSummaryCheckBox: boolean;
  surgicalSummaryCheckBox: boolean;
  showNext: boolean;
  medicationRecord: MedicationRecordData[];
  medicalAdminRecord: MedicationAdminRecordData[];
  prnRecord: MedicationPRNRecordData[];
  medicationType: SelectInter[];
  selectComponent: (val: number) => void;
  enableNext: (val: boolean) => void;
  setValue: Dispatch<SetStateAction<number>>;
  handleInput: (
    val1: string,
    val2: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    val3?: number | undefined,
  ) => void;
  handleDropDown: (
    val1: string,
    val2: string,
    val3: SingleValue<{
      value: string | number | undefined;
      label: string | undefined;
    }>,
    val4?: number,
  ) => void;
  handleDate: (val1: string, val2: string, val3: Date, val4?: number) => void;
  handlePhoneNumber: (val1: string, val2: string, val3: string) => void;
  handleSave: (
    val: number,
    val2: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  handleCheckBox: (val: string) => void;
  handleBack: (val1: number) => void;
  handleFile: (
    val1: string,
    val2: string,
    val3: React.ChangeEvent<HTMLInputElement>,
    val4?: number,
  ) => void;
  updatePatientDetails: (val: PatientDetailsAndAdmissionData) => void;
  updateMode: (val: string) => void;
  backwardComponent: (val: number) => void;
  forwardComponent: (val: number) => void;
  updateValidator: (val: number) => void;
  addRow: (val: string) => void;
  deleteRow: (val1: string, val2: number) => void;
  checkAndUpdateValue: () => void;
  updateHeaderText: (text: string) => void;
  validator: React.MutableRefObject<SimpleReactValidator>;
};
