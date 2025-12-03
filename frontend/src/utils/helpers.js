export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(date))
}

export const formatDateTime = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date))
}

export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num)
}

export const calculateWPM = (text, seconds) => {
  const words = text.trim().split(/\s+/).length
  const minutes = seconds / 60
  return Math.round(words / minutes)
}

export const calculateAccuracy = (original, typed) => {
  if (!typed.length) return 100
  
  let correct = 0
  const minLength = Math.min(original.length, typed.length)
  
  for (let i = 0; i < minLength; i++) {
    if (original[i] === typed[i]) correct++
  }
  
  return Math.round((correct / original.length) * 100)
}

export const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

export const throttle = (fn, delay) => {
  let lastCall = 0
  return (...args) => {
    const now = Date.now()
    if (now - lastCall < delay) return
    lastCall = now
    return fn(...args)
  }
}
