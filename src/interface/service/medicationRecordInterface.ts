export interface MedicationRecordCreateBody {
  admission_id: string | number | null | undefined;
  recordData: {
    medRecordData: medRecord[];
    medAdminData: medAdmin[];
  };
}

export interface medRecord {
  id: number | null | undefined;
  medication_name: string | null;
  date_ordered: Date | null;
  dose: string | null;
  route_of_admin: string | null;
  frequency: string | null;
  indication: string | null;
  prescriber: string | null;
  record_type: number | null;
  status: string | number | undefined;
  admission_id: string | number | undefined;
}

export interface medAdmin {
  id: number | null | undefined;
  medication_name: string | null;
  date_ordered: Date | null;
  dose: string | null;
  route_of_admin: string | null;
  frequency: string | null;
  indication: string | null;
  prescriber: string | null;
  record_type: number | null;
  status: string | number | undefined;
  admission_id: string | number | undefined;
}
