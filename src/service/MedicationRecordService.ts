import axios from 'axios';
import { MedicationRecordCreateBody } from '../interface/service/medicationRecordInterface';

const createMedicationRecord = (body: MedicationRecordCreateBody) =>
  axios.post(
    `${import.meta.env.VITE_API_URL}/admission/medication-record/create`,
    body,
  );

const updateMedicationRecord = (body: MedicationRecordCreateBody) =>
  axios.put(
    `${import.meta.env.VITE_API_URL}/admission/medication-record/update`,
    body,
  );

const removeMedicationRecord = (id: number | string) =>
  axios.delete(
    `${import.meta.env.VITE_API_URL}/admission/medication-record/delete/${id}`,
  );

const removeAdminRecord = (id: number | string) =>
  axios.delete(
    `${
      import.meta.env.VITE_API_URL
    }/admission/medication-record/medication-admin/delete/${id}`,
  );

export {
  createMedicationRecord,
  updateMedicationRecord,
  removeMedicationRecord,
  removeAdminRecord,
};
