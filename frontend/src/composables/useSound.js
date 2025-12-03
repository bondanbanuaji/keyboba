import { ref } from 'vue'

export function useSound() {
  const soundEnabled = ref(
    localStorage.getItem('soundEnabled') === 'true' || false
  )

  const audioContext = ref(null)

  const initAudioContext = () => {
    if (!audioContext.value) {
      audioContext.value = new (window.AudioContext || window.webkitAudioContext)()
    }
  }

  const playKeySound = (frequency = 440, duration = 0.1) => {
    if (!soundEnabled.value) return
    
    initAudioContext()
    
    const oscillator = audioContext.value.createOscillator()
    const gainNode = audioContext.value.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.value.destination)
    
    oscillator.frequency.value = frequency
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(0.3, audioContext.value.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.value.currentTime + duration
    )
    
    oscillator.start(audioContext.value.currentTime)
    oscillator.stop(audioContext.value.currentTime + duration)
  }

  const playSuccessSound = () => {
    if (!soundEnabled.value) return
    
    initAudioContext()
    
    const notes = [523.25, 659.25, 783.99, 1046.50]
    notes.forEach((freq, i) => {
      setTimeout(() => playKeySound(freq, 0.15), i * 80)
    })
  }

  const playErrorSound = () => {
    if (!soundEnabled.value) return
    
    initAudioContext()
    playKeySound(200, 0.2)
  }

  const toggleSound = () => {
    soundEnabled.value = !soundEnabled.value
    localStorage.setItem('soundEnabled', soundEnabled.value.toString())
  }

  return {
    soundEnabled,
    playKeySound,
    playSuccessSound,
    playErrorSound,
    toggleSound
  }
}
