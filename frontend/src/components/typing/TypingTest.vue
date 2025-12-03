<template>
  <div class="w-full max-w-4xl">
    <div v-if="!started && !finished" class="card bg-base-200 shadow-xl">
      <div class="card-body items-center text-center p-4 sm:p-8">
        <h2 class="card-title text-xl sm:text-2xl mb-4">Ready to start?</h2>
        <p class="mb-4 sm:mb-6 opacity-70 text-sm sm:text-base">Click the button below and start typing when you're ready</p>
        <button @click="startTest" class="btn btn-primary btn-lg">
          Start Test ({{ duration }}s)
        </button>
      </div>
    </div>

    <div v-if="started && !finished" class="space-y-4 sm:space-y-6">
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body p-4 sm:p-6">
          <div class="flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-4 mb-4">
            <div class="text-2xl font-bold">
              Time: <span class="text-primary">{{ timeLeft }}s</span>
            </div>
            <div class="text-2xl font-bold">
              WPM: <span class="text-secondary">{{ currentWPM }}</span>
            </div>
            <div class="text-2xl font-bold">
              Accuracy: <span class="text-accent">{{ currentAccuracy }}%</span>
            </div>
          </div>

          <progress 
            class="progress progress-primary w-full" 
            :value="timeLeft" 
            :max="duration"
          ></progress>
        </div>
      </div>

      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <div class="text-lg sm:text-2xl leading-relaxed mb-4 font-mono select-none">
            <span 
              v-for="(char, index) in displayText" 
              :key="index"
              :class="getCharClass(index)"
            >
              {{ char }}
            </span>
          </div>

          <textarea
            ref="inputRef"
            v-model="userInput"
            @input="handleInput"
            @paste.prevent
            class="textarea textarea-bordered textarea-lg w-full font-mono text-base sm:text-xl"
            placeholder="Start typing here..."
            :disabled="finished"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>

    <div v-if="finished" class="card bg-base-200 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-3xl mb-6">Test Complete!</h2>
        
        <div class="stats stats-vertical lg:stats-horizontal shadow w-full mb-6">
          <div class="stat">
            <div class="stat-title">WPM</div>
            <div class="stat-value text-primary">{{ finalWPM }}</div>
            <div class="stat-desc">Words per minute</div>
          </div>
          
          <div class="stat">
            <div class="stat-title">Accuracy</div>
            <div class="stat-value text-secondary">{{ finalAccuracy }}%</div>
            <div class="stat-desc">Correct characters</div>
          </div>
          
          <div class="stat">
            <div class="stat-title">Raw WPM</div>
            <div class="stat-value text-accent">{{ finalRawWPM }}</div>
            <div class="stat-desc">Total speed</div>
          </div>
        </div>

        <div class="flex flex-wrap gap-4 justify-center">
          <button @click="restartTest" class="btn btn-primary btn-lg">
            Try Again
          </button>
          <router-link to="/leaderboard" class="btn btn-outline btn-lg">
            View Leaderboard
          </router-link>
          <ShareButton :wpm="finalWPM" :accuracy="finalAccuracy" :duration="duration" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useTyping } from '../../composables/useTyping'
import { useSound } from '../../composables/useSound'
import { useChallengesStore } from '../../stores/challenges'
import ShareButton from '../ui/ShareButton.vue'

const props = defineProps({
  duration: {
    type: Number,
    default: 30
  }
})

const { getRandomText, calculateWPM, calculateAccuracy } = useTyping()
const { playKeySound, playSuccessSound, playErrorSound } = useSound()
const challengesStore = useChallengesStore()

const started = ref(false)
const finished = ref(false)
const displayText = ref('')
const userInput = ref('')
const timeLeft = ref(props.duration)
const startTime = ref(null)
const mistakes = ref(0)
const inputRef = ref(null)

let timer = null

const currentWPM = computed(() => {
  if (!started.value || !startTime.value) return 0
  const elapsed = (Date.now() - startTime.value) / 1000
  if (elapsed < 1) return 0
  return calculateWPM(userInput.value, elapsed)
})

const currentAccuracy = computed(() => {
  return calculateAccuracy(displayText.value, userInput.value)
})

const finalWPM = ref(0)
const finalAccuracy = ref(0)
const finalRawWPM = ref(0)

const getCharClass = (index) => {
  if (index >= userInput.value.length) {
    return index === userInput.value.length ? 'text-primary opacity-50 bg-primary/20' : 'opacity-50'
  }
  
  return userInput.value[index] === displayText.value[index] 
    ? 'text-success' 
    : 'text-error bg-error/20'
}

const startTest = async () => {
  started.value = true
  displayText.value = getRandomText()
  userInput.value = ''
  timeLeft.value = props.duration
  startTime.value = Date.now()
  mistakes.value = 0

  await nextTick()
  if (inputRef.value) {
    inputRef.value.focus()
  }

  timer = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      finishTest()
    }
  }, 1000)
}

const handleInput = () => {
  const lastChar = userInput.value[userInput.value.length - 1]
  const expectedChar = displayText.value[userInput.value.length - 1]
  
  if (lastChar !== expectedChar) {
    mistakes.value++
    playErrorSound()
  } else {
    playKeySound(440 + Math.random() * 200)
  }

  if (userInput.value.length >= displayText.value.length) {
    finishTest()
  }
}

const finishTest = () => {
  if (finished.value) return
  
  finished.value = true
  started.value = false
  
  if (timer) {
    clearInterval(timer)
    timer = null
  }

  const elapsed = (Date.now() - startTime.value) / 1000
  finalWPM.value = calculateWPM(userInput.value, elapsed)
  finalAccuracy.value = calculateAccuracy(displayText.value, userInput.value)
  finalRawWPM.value = Math.round((userInput.value.length / 5) / (elapsed / 60))
  
  // Check challenges
  challengesStore.checkChallenges({
    wpm: finalWPM.value,
    accuracy: finalAccuracy.value,
    duration: props.duration
  })
  
  playSuccessSound()
}

const restartTest = () => {
  finished.value = false
  started.value = false
  userInput.value = ''
  displayText.value = ''
  timeLeft.value = props.duration
  startTime.value = null
  mistakes.value = 0
  finalWPM.value = 0
  finalAccuracy.value = 0
  finalRawWPM.value = 0
}

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.textarea:focus {
  outline: 2px solid oklch(var(--p));
  outline-offset: 2px;
}
</style>
