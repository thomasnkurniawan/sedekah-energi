// utils/axiosInstance.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Pastikan ini di-set di .env
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Contoh: Tambahkan token jika ada
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Contoh: handle 401
    if (error.response?.status === 401) {
      console.error('Unauthorized access')
      // redirect atau alert bisa ditaruh di sini kalau perlu
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
