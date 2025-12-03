import { ref, onMounted, onUnmounted } from 'vue'

export function useKeyboard() {
  const pressedKeys = ref(new Set())
  const keyStats = ref({
    totalPressed: 0,
    lastKey: null,
    lastKeyTime: null
  })

  const handleKeyDown = (event) => {
    const key = event.code || event.key
    
    if (!pressedKeys.value.has(key)) {
      pressedKeys.value.add(key)
      keyStats.value.totalPressed++
      keyStats.value.lastKey = key
      keyStats.value.lastKeyTime = Date.now()
    }
  }

  const handleKeyUp = (event) => {
    const key = event.code || event.key
    pressedKeys.value.delete(key)
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('keyup', handleKeyUp)
  })

  return {
    pressedKeys,
    keyStats
  }
}
