import axios from 'axios';
import {
  CreateLabTestAndReportData,
} from '../interface/service/labTestAndReportInterface';

const createLabTestAndReport = (body: {
  data: CreateLabTestAndReportData[];
  admission_id: number;
}) =>
  axios.post(`${import.meta.env.VITE_API_URL}/labTestAndReport/create`, body);

const updateLabTestAndReport = (body: CreateLabTestAndReportData[]) =>
  axios.put(`${import.meta.env.VITE_API_URL}/labTestAndReport/update`, body);

const uploadFileInS3 = (body: FormData, type: string) =>
  axios.post(
    `${import.meta.env.VITE_API_URL}/labTestAndReport/upload/${type}`,
    body,
  );

export { createLabTestAndReport, updateLabTestAndReport, uploadFileInS3 };
