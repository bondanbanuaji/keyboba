import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref('dark')

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    currentTheme.value = savedTheme
    applyTheme(savedTheme)
  }

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
    applyTheme(currentTheme.value)
  }

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme)
  })

  return {
    currentTheme,
    initTheme,
    toggleTheme
  }
})
