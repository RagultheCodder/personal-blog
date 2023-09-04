import axios from 'axios';
import { CreateDischargeData } from '../interface/service/dischargeServiceInterface';

export const createDischarge = (body: CreateDischargeData) =>
  axios.post(`${import.meta.env.VITE_API_URL}/discharge/create`, body);
