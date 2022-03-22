import axios from 'axios';
import { api } from '../urlConfig';
const token = window.localStorage.getItem('token');
const publicToken = window.localStorage.getItem('publicToken');
const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token
      ? `Bearer ${token}`
      : '' || publicToken
      ? `Bearer ${publicToken}`
      : '',
  },
});

export default axiosIntance;
