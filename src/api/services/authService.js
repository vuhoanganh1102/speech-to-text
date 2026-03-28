import axiosClient from '@api/axiosClient'

const authService = {
  login: (credentials) => axiosClient.post('/auth/login', credentials),
  register: (data) => axiosClient.post('/auth/register', data),
  getProfile: () => axiosClient.get('/auth/profile'),
  refreshToken: () => axiosClient.post('/auth/refresh'),
}

export default authService
