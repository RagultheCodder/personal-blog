export interface MedicalSummaryCreateBody {
  summaryData:{
  medicalData: {
    medication_name: string | null;
    dose_information: string | null;
    reason: string | null;
    created_by?: number;
    updated_by?: number;
    patient_id?: number | string | null | undefined;
  }[];
  surgicalData:{
    surgery_name: string | null;
    surgery_date: Date | null;
    reason: string | null;
    created_by?: number;
    updated_by?: number;
    patient_id?: number | string | null | undefined;
    [key: string]: string | Date | null | number | undefined;  
  }[];
}
  patientId: number | string | null | undefined;
}

export interface MedicalSummaryReqData {
  medication_name: string | null;
  dose_information: string | null;
  reason: string | null;
  created_by?: number;
  updated_by?: number;
  patient_id?: number | string | null | undefined;
  [key: string]: string | null | number | undefined;
}

export interface SurgicalDataCreateReq {
  surgery_name: string | null;
  surgery_date: Date | null;
  reason: string | null;
  created_by?: number;
  updated_by?: number;
  patient_id?: number | string | null | undefined;
  [key: string]: string | Date | null | number | undefined;
}
