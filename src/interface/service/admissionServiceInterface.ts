export interface AdmissionCreateBodyData {
  admissionData: {
    id?: number | null | undefined;
    admitting_doctor: string;
    admitting_date: Date;
    gp: string;
    medicare_no: string;
    membership_no: string;
    patient_height: string;
    admission_procedure: string;
    phone_number: string;
    treating_doctor_at_admission: string;
    card_ref_no: string;
    patient_weight: string;
    reason_for_admission: string;
    health_insurance_no: string;
    ward_number: string;
    ward_name: string;
    orientation_to_ward: string | undefined;
    kin_name: string;
    kin_address: string;
    kin_relationship: string;
    kin_phone_number: string;
    patient_id: number | null | undefined;
  };
  careType: {
    id?: number | null | undefined;
    care_start_date: Date | null;
    care_type: string | null;
    care_notes: string | null;
    admission_id?: number | null | undefined;
  }[];
  aidsAndProsthetics: {
    id?: number | null | undefined;
    aids_name: string | number | undefined;
    aids_reason: string;
    admission_id?: number | null | undefined;
  }[];
}
