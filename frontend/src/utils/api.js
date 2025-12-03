const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export const api = {
  async get(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`)
    if (!response.ok) throw new Error('API request failed')
    return response.json()
  },

  async post(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('API request failed')
    return response.json()
  },

  async put(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error('API request failed')
    return response.json()
  },

  async delete(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE'
    })
    if (!response.ok) throw new Error('API request failed')
    return response.json()
  }
}

export const typingAPI = {
  submitResult: (data) => api.post('/typing/result', data),
  getHistory: () => api.get('/typing/history'),
  getStats: () => api.get('/typing/stats'),
  getBest: () => api.get('/typing/best')
}

export const leaderboardAPI = {
  getGlobal: () => api.get('/leaderboard/global'),
  getDaily: () => api.get('/leaderboard/daily'),
  getFriends: () => api.get('/leaderboard/friends')
}

export const achievementsAPI = {
  getAll: () => api.get('/achievements'),
  getUserAchievements: () => api.get('/achievements/user'),
  claim: (id) => api.post('/achievements/claim', { id })
}
