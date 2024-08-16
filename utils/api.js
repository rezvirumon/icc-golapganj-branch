//Utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://icc-golapganj-server.vercel.app',
});

export default api;
