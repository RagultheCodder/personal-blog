import axios from 'axios';
import { CreateClinicalNotesData } from '../interface/service/clinicalNotesServiceInterface';

const createClinicalNotes = (body: {
  notes: CreateClinicalNotesData[];
  admissionId: number;
}) => axios.post(`${import.meta.env.VITE_API_URL}/clinical/create`, body);

const updateClinicalNotes = (body: CreateClinicalNotesData[]) =>
  axios.put(`${import.meta.env.VITE_API_URL}/clinical/update`, body);

const removeClinicalNote = (id: number) =>
  axios.delete(`${import.meta.env.VITE_API_URL}/clinical/remove/${id}`);

export { createClinicalNotes, updateClinicalNotes, removeClinicalNote };
