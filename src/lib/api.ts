import axios, {
  type AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from 'axios'

/**
 * Единый axios-клиент для общения с Django-бэкендом.
 *
 * В dev-режиме запросы идут на относительный путь `/api`, который Vite
 * проксирует на http://127.0.0.1:8000 (см. vite.config.ts). В проде базовый
 * URL можно переопределить переменной окружения VITE_API_BASE_URL.
 */
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
  // Нужно, чтобы Django мог ставить/читать сессионные и CSRF-куки.
  withCredentials: true,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
  headers: {
    'Content-Type': 'application/json',
  },
})

const TOKEN_STORAGE_KEY = 'spotistat_access_token'

export function setAuthToken(token: string | null): void {
  if (token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token)
  } else {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
  }
}

export function getAuthToken(): string | null {
  return localStorage.getItem(TOKEN_STORAGE_KEY)
}

// Автоматически подставляем Bearer-токен, если он есть (для JWT/DRF Token).
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAuthToken()
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`)
  }
  return config
})

// Единая обработка 401 — токен протух, чистим его.
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      setAuthToken(null)
    }
    return Promise.reject(error)
  },
)

export default api
