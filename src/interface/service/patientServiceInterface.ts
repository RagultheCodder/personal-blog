export interface PatientCreateBodyData {
  family_name: string | null;
  given_name: string | null;
  dob: Date;
  user_course_id: number | null;
  gender_id: number | null | string | undefined;
  address: string | null;
}

export interface PatientEditBodyData {
  family_name?: string | null;
  given_name?: string | null;
  dob?: Date;
  user_course_id?: number | null;
  gender_id?: number | null | string;
  address?: string | null;
  contact_number?: string;
  emergency_contact_number?: string;
  status?: string;
  country?: string;
  religion?: string;
  marital_status?: string;
  language?: string;
  interpreter_required?: string;
  social_history?: string;
  family_history?: string;
}

export interface CreateAllergyData {
  id?: number | null;
  substance: string | null;
  patient_id: number | null;
  reaction: string | number;
  symptoms: string | null;
  severity: string | number;
  [key: string]: string | null | number | undefined;
}
