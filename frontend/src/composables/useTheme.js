import { computed } from 'vue'
import { useThemeStore } from '../stores/theme'

export function useTheme() {
  const themeStore = useThemeStore()

  const isDark = computed(() => themeStore.currentTheme === 'dark')
  
  const toggle = () => {
    themeStore.toggleTheme()
  }

  return {
    currentTheme: computed(() => themeStore.currentTheme),
    isDark,
    toggle
  }
}
