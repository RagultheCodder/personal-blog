export interface CreateClinicalNotesData {
  id?: number;
  admission_id: number;
  document_captured_by: string;
  date_and_time: Date;
  note: string;
}
