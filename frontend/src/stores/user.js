import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)

  const setUser = (userData) => {
    user.value = userData
    isAuthenticated.value = !!userData
  }

  const clearUser = () => {
    user.value = null
    isAuthenticated.value = false
  }

  return {
    user,
    isAuthenticated,
    setUser,
    clearUser
  }
})
