export interface CreateDischargeData {
  admission_id: number;
  treating_doctor_at_discharge: string;
  mode_of_discharge: string;
  discharge_date_time: Date;
  discharge_summary_note: string;
  transferring_to_facility_member: string;
  baby_admission_weight: string;
  referral_to_further_care: string;
  mental_health_legal_status_indicator: string;
  consent_to_release_patient_details: string;
  criteria_led_discharge_type: string;
  followup_appointment: boolean;
  followup_date_time: Date;
  appointment_made_notes: string;
  transport_confirmed: boolean;
  transport_notes: string;
  valuables_returned: boolean;
  valuables_notes: string;
}
