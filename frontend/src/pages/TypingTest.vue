<template>
  <div class="container mx-auto px-4 py-4 sm:py-8">
    <h1 class="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
      <span class="text-gradient">Typing Test</span>
    </h1>

    <div class="flex flex-col items-center gap-4 sm:gap-6">
      <div class="tabs tabs-boxed flex-wrap justify-center">
        <a 
          v-for="mode in timeModes" 
          :key="mode.value"
          class="tab"
          :class="{ 'tab-active': selectedMode === mode.value }"
          @click="selectMode(mode.value)"
        >
          {{ mode.label }}
        </a>
      </div>

      <TypingTest 
        :duration="selectedMode"
        :key="testKey"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TypingTest from '../components/typing/TypingTest.vue'

const selectedMode = ref(30)
const testKey = ref(0)

const timeModes = [
  { label: '15s', value: 15 },
  { label: '30s', value: 30 },
  { label: '60s', value: 60 },
  { label: '120s', value: 120 }
]

const selectMode = (mode) => {
  selectedMode.value = mode
  testKey.value++
}
</script>
