import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useChallengesStore = defineStore('challenges', () => {
  const challenges = ref([
    {
      id: 'speed-demon',
      title: 'Speed Demon',
      description: 'Type 100 WPM or higher',
      icon: '⚡',
      target: 100,
      type: 'wpm',
      reward: 50,
      completed: false,
      progress: 0
    },
    {
      id: 'accuracy-master',
      title: 'Accuracy Master',
      description: 'Achieve 98% accuracy',
      icon: '🎯',
      target: 98,
      type: 'accuracy',
      reward: 30,
      completed: false,
      progress: 0
    },
    {
      id: 'marathon-runner',
      title: 'Marathon Runner',
      description: 'Complete 10 typing tests today',
      icon: '🏃',
      target: 10,
      type: 'count',
      reward: 40,
      completed: false,
      progress: 0
    }
  ])

  const dailyChallenge = ref({
    id: 'daily-' + new Date().toISOString().split('T')[0],
    title: 'Daily Challenge',
    description: 'Type for 5 minutes total today',
    icon: '📅',
    target: 300,
    type: 'time',
    reward: 100,
    completed: false,
    progress: 0,
    expiresAt: new Date(new Date().setHours(23, 59, 59, 999))
  })

  const activeChallenges = computed(() => {
    return challenges.value.filter(c => !c.completed)
  })

  const completedChallenges = computed(() => {
    return challenges.value.filter(c => c.completed)
  })

  const updateProgress = (challengeId, value) => {
    const challenge = challenges.value.find(c => c.id === challengeId)
    if (challenge) {
      challenge.progress = value
      if (challenge.progress >= challenge.target) {
        challenge.completed = true
      }
    }
  }

  const updateDailyProgress = (value) => {
    dailyChallenge.value.progress += value
    if (dailyChallenge.value.progress >= dailyChallenge.value.target) {
      dailyChallenge.value.completed = true
    }
  }

  const checkChallenges = (result) => {
    challenges.value.forEach(challenge => {
      if (challenge.completed) return

      switch (challenge.type) {
        case 'wpm':
          if (result.wpm >= challenge.target) {
            updateProgress(challenge.id, challenge.target)
          }
          break
        case 'accuracy':
          if (result.accuracy >= challenge.target) {
            updateProgress(challenge.id, challenge.target)
          }
          break
        case 'count':
          updateProgress(challenge.id, challenge.progress + 1)
          break
      }
    })

    if (result.duration) {
      updateDailyProgress(result.duration)
    }
  }

  return {
    challenges,
    dailyChallenge,
    activeChallenges,
    completedChallenges,
    updateProgress,
    updateDailyProgress,
    checkChallenges
  }
})
