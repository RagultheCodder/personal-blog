import axios from 'axios';
import {
  CreateDiagnosisAndObservationData,
  UpdateDiagnosisAndObservationData,
} from '../interface/service/diagnosisAndObservationServiceInterface';

export const createDiagnosisAndObservation = (
  body: CreateDiagnosisAndObservationData,
) =>
  axios.post(
    `${import.meta.env.VITE_API_URL}/diagnosisAndObservation/create`,
    body,
  );

export const updateDiagnosisAndObservation = (
  body: UpdateDiagnosisAndObservationData,
) =>
  axios.put(
    `${import.meta.env.VITE_API_URL}/diagnosisAndObservation/update`,
    body,
  );
