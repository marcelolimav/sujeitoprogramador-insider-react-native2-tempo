import axios from 'axios';

export const key = '<Incluir a chave do HG brasil>';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;