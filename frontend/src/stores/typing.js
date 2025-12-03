import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTypingStore = defineStore('typing', () => {
  const currentText = ref('')
  const userInput = ref('')
  const startTime = ref(null)
  const endTime = ref(null)
  const isTyping = ref(false)
  const mistakes = ref(0)
  const keysPressed = ref(0)

  const wpm = computed(() => {
    if (!startTime.value || !endTime.value) return 0
    const timeInMinutes = (endTime.value - startTime.value) / 1000 / 60
    const wordsTyped = userInput.value.trim().split(' ').length
    return Math.round(wordsTyped / timeInMinutes)
  })

  const accuracy = computed(() => {
    if (keysPressed.value === 0) return 100
    return Math.round(((keysPressed.value - mistakes.value) / keysPressed.value) * 100)
  })

  const rawWpm = computed(() => {
    if (!startTime.value || !endTime.value) return 0
    const timeInMinutes = (endTime.value - startTime.value) / 1000 / 60
    const charsTyped = userInput.value.length
    return Math.round((charsTyped / 5) / timeInMinutes)
  })

  const startTyping = (text) => {
    currentText.value = text
    userInput.value = ''
    startTime.value = Date.now()
    endTime.value = null
    isTyping.value = true
    mistakes.value = 0
    keysPressed.value = 0
  }

  const stopTyping = () => {
    endTime.value = Date.now()
    isTyping.value = false
  }

  const updateInput = (input) => {
    userInput.value = input
  }

  const incrementMistakes = () => {
    mistakes.value++
  }

  const incrementKeys = () => {
    keysPressed.value++
  }

  const reset = () => {
    currentText.value = ''
    userInput.value = ''
    startTime.value = null
    endTime.value = null
    isTyping.value = false
    mistakes.value = 0
    keysPressed.value = 0
  }

  return {
    currentText,
    userInput,
    startTime,
    endTime,
    isTyping,
    mistakes,
    keysPressed,
    wpm,
    accuracy,
    rawWpm,
    startTyping,
    stopTyping,
    updateInput,
    incrementMistakes,
    incrementKeys,
    reset
  }
})
