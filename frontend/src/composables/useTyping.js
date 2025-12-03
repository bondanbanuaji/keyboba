import { ref, computed } from 'vue'

export function useTyping() {
  const typingTexts = [
    "The quick brown fox jumps over the lazy dog",
    "Programming is the art of telling another human what one wants the computer to do",
    "Practice makes perfect when it comes to typing speed and accuracy",
    "The best way to predict the future is to create it yourself",
    "Success is not final, failure is not fatal: it is the courage to continue that counts"
  ]

  const getRandomText = () => {
    return typingTexts[Math.floor(Math.random() * typingTexts.length)]
  }

  const calculateWPM = (text, timeInSeconds) => {
    const words = text.trim().split(' ').length
    const minutes = timeInSeconds / 60
    return Math.round(words / minutes)
  }

  const calculateAccuracy = (original, typed) => {
    if (!typed.length) return 100
    
    let correct = 0
    const length = Math.min(original.length, typed.length)
    
    for (let i = 0; i < length; i++) {
      if (original[i] === typed[i]) correct++
    }
    
    return Math.round((correct / original.length) * 100)
  }

  return {
    typingTexts,
    getRandomText,
    calculateWPM,
    calculateAccuracy
  }
}
