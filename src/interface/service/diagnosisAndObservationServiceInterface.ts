export interface CreateDiagnosisAndObservationData {
  data:
    | {
        diagnosis: {
          id?: number;
          admission_id: number;
          diagnosis_suggested: string;
          suggested_by: string;
          suggested_on: Date;
          notes: string;
        }[];
        observation: {
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
        }[];
      }
    | undefined;
  admission_id: number;
}

export interface UpdateDiagnosisAndObservationData {
  data:
    | {
        diagnosis: {
          id?: number;
          admission_id: number;
          diagnosis_suggested: string;
          suggested_by: string;
          suggested_on: Date;
          notes: string;
        }[];
        observation: {
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
        }[];
      }
    | undefined;
}
