import axios from 'axios';
import { MedicalSummaryCreateBody } from '../interface/service/medicalSummaryInterface';

const createMedicalSummary = (medicalBody: MedicalSummaryCreateBody) =>
  axios.post(
    `${import.meta.env.VITE_API_URL}/patient/medical-summary/create`,
    medicalBody,
  );

const updateMedicalSummary = (medicalBody: MedicalSummaryCreateBody) =>
  axios.put(
    `${import.meta.env.VITE_API_URL}/patient/medical-summary/update`,
    medicalBody,
  );

const deleteMedicalSummary = (id: number | string | null | undefined) =>
  axios.delete(
    `${import.meta.env.VITE_API_URL}/patient/medical-summary/delete/${id}`,
  );

const deleteSurgicalSummary = (id: number | string | null | undefined) =>
  axios.delete(
    `${
      import.meta.env.VITE_API_URL
    }/patient/medical-summary/surgery/delete/${id}`,
  );
export {
  createMedicalSummary,
  updateMedicalSummary,
  deleteMedicalSummary,
  deleteSurgicalSummary,
};
