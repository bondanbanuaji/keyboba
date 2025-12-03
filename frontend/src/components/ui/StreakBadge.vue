<template>
  <div class="streak-badge" :class="streakClass">
    <div class="streak-icon">🔥</div>
    <div class="streak-content">
      <div class="streak-number">{{ streak }}</div>
      <div class="streak-label">Day Streak</div>
    </div>
    <div v-if="streak >= 7" class="streak-celebration">
      <div class="confetti">✨</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  streak: {
    type: Number,
    default: 0
  }
})

const streakClass = computed(() => {
  if (props.streak === 0) return 'streak-none'
  if (props.streak < 3) return 'streak-beginner'
  if (props.streak < 7) return 'streak-building'
  if (props.streak < 30) return 'streak-fire'
  return 'streak-legendary'
})
</script>

<style scoped>
.streak-badge {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.streak-none {
  background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
}

.streak-beginner {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.streak-building {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.streak-fire {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  animation: pulse 2s ease-in-out infinite;
}

.streak-legendary {
  background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
  animation: pulse 2s ease-in-out infinite, rainbow 5s linear infinite;
}

.streak-icon {
  font-size: 3rem;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}

.streak-content {
  flex: 1;
  color: white;
}

.streak-number {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;
}

.streak-label {
  font-size: 0.875rem;
  opacity: 0.9;
  margin-top: 0.25rem;
}

.streak-celebration {
  position: absolute;
  top: -10px;
  right: -10px;
}

.confetti {
  font-size: 2rem;
  animation: confetti-spin 2s linear infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

@keyframes rainbow {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

@keyframes confetti-spin {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
</style>
