import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

export async function fetchSyllabus() {
  const { data } = await api.get('/api/syllabus')
  return data
}

export async function fetchSyllabusById(id) {
  const { data } = await api.get(`/api/syllabus/${id}`)
  return data
}

export async function createSyllabus(payload) {
  const { data } = await api.post('/api/syllabus', payload)
  return data
}

export async function updateSyllabus(id, payload) {
  const url = id ? `/api/syllabus/${id}` : '/api/syllabus'
  const { data } = await api.put(url, payload)
  return data
}

export default api
