import axios from 'axios';
import { AdmissionCreateBodyData } from '../interface/service/admissionServiceInterface';

const createAdmission = (body: AdmissionCreateBodyData) =>
  axios.post(`${import.meta.env.VITE_API_URL}/admissionWard/create`, body);

const removeAids = (aidsId: number) =>
  axios.delete(
    `${import.meta.env.VITE_API_URL}/admissionWard/aids/delete/${aidsId}`,
  );

const removeCare = (aidsId: number) =>
  axios.delete(
    `${import.meta.env.VITE_API_URL}/admissionWard/delete/care/${aidsId}`,
  );

const updateAdmission = (body: AdmissionCreateBodyData) =>
  axios.put(`${import.meta.env.VITE_API_URL}/admissionWard/update`, body);

export { createAdmission, removeAids, updateAdmission, removeCare };
