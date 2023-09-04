import axios from 'axios';

import {
  CreateAllergyData,
  PatientCreateBodyData,
  PatientEditBodyData,
} from '../interface/service/patientServiceInterface';

const createPatient = (body: PatientCreateBodyData) =>
  axios.post(`${import.meta.env.VITE_API_URL}/patient/create`, body);

const getAllPatientByUserCourseId = (userCourseId: number) =>
  axios.get(`${import.meta.env.VITE_API_URL}/patient/list/${userCourseId}`);

const getStudentDataById = (studentId: number) =>
  axios.get(`${import.meta.env.VITE_API_URL}/patient/${studentId}`);

const updatePatient = (
  patientId: number | null | undefined,
  body: PatientEditBodyData,
) =>
  axios.put(
    `${import.meta.env.VITE_API_URL}/patient/update/${patientId}`,
    body,
  );

const createAllergy = (body: {
  allergy: CreateAllergyData[];
  patientId: number | null | undefined;
}) =>
  axios.post(`${import.meta.env.VITE_API_URL}/patient/allergy/create`, body);

const updateAllergy = (body: {
  allergy: CreateAllergyData[];
  patientId: number | undefined | null;
}) => axios.put(`${import.meta.env.VITE_API_URL}/patient/allergy/update`, body);

const removeAllergy = (allergyId: number) =>
  axios.delete(
    `${import.meta.env.VITE_API_URL}/patient/allergy/remove/${allergyId}`,
  );

export {
  createPatient,
  removeAllergy,
  getAllPatientByUserCourseId,
  getStudentDataById,
  updatePatient,
  createAllergy,
  updateAllergy,
};
