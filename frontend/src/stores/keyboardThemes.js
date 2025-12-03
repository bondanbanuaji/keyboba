import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useKeyboardThemesStore = defineStore('keyboardThemes', () => {
  const themes = [
    {
      id: 'default',
      name: 'Default',
      colors: {
        base: 'oklch(var(--b3))',
        border: 'oklch(var(--bc) / 0.2)',
        pressed: 'oklch(var(--p))',
        pressedText: 'oklch(var(--pc))'
      }
    },
    {
      id: 'ocean',
      name: 'Ocean Blue',
      colors: {
        base: '#1e3a8a',
        border: '#3b82f6',
        pressed: '#06b6d4',
        pressedText: '#ffffff'
      }
    },
    {
      id: 'forest',
      name: 'Forest Green',
      colors: {
        base: '#14532d',
        border: '#22c55e',
        pressed: '#4ade80',
        pressedText: '#ffffff'
      }
    },
    {
      id: 'sunset',
      name: 'Sunset',
      colors: {
        base: '#7c2d12',
        border: '#f97316',
        pressed: '#fb923c',
        pressedText: '#ffffff'
      }
    },
    {
      id: 'purple',
      name: 'Purple Haze',
      colors: {
        base: '#581c87',
        border: '#a855f7',
        pressed: '#c084fc',
        pressedText: '#ffffff'
      }
    },
    {
      id: 'cyber',
      name: 'Cyberpunk',
      colors: {
        base: '#0f172a',
        border: '#0ea5e9',
        pressed: '#06b6d4',
        pressedText: '#000000'
      }
    },
    {
      id: 'neon',
      name: 'Neon Lights',
      colors: {
        base: '#18181b',
        border: '#ec4899',
        pressed: '#f472b6',
        pressedText: '#000000'
      }
    },
    {
      id: 'retro',
      name: 'Retro',
      colors: {
        base: '#44403c',
        border: '#fbbf24',
        pressed: '#fcd34d',
        pressedText: '#000000'
      }
    }
  ]

  const currentThemeId = ref(
    localStorage.getItem('keyboardTheme') || 'default'
  )

  const currentTheme = ref(
    themes.find(t => t.id === currentThemeId.value) || themes[0]
  )

  const setTheme = (themeId) => {
    const theme = themes.find(t => t.id === themeId)
    if (theme) {
      currentThemeId.value = themeId
      currentTheme.value = theme
      localStorage.setItem('keyboardTheme', themeId)
    }
  }

  return {
    themes,
    currentTheme,
    currentThemeId,
    setTheme
  }
})
