export interface CreateLabTestAndReportData {
  id?: number;
  diagnosis_type: string;
  report_upload_date: Date;
  diagnosis_report_reviewed: string;
  admission_id: number;
  report: string;
  signature: string;
}

