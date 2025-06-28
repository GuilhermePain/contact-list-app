import axios from 'axios'

// Criação da instância com configurações padrão
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL da sua API
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptador para adicionar token automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') // ou use cookies, conforme preferir

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api
