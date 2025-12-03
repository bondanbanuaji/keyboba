<template>
  <div class="container mx-auto px-4 py-4 sm:py-8">
    <h1 class="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
      <span class="text-gradient">Daily Challenges</span>
    </h1>

    <!-- Daily Challenge -->
    <div class="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl mb-8">
      <div class="card-body">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="text-6xl">{{ dailyChallenge.icon }}</div>
            <div>
              <h2 class="card-title text-2xl">{{ dailyChallenge.title }}</h2>
              <p class="opacity-90">{{ dailyChallenge.description }}</p>
              <div class="text-sm opacity-75 mt-2">
                Expires: {{ formatTime(dailyChallenge.expiresAt) }}
              </div>
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold">{{ dailyChallenge.reward }}</div>
            <div class="text-sm opacity-90">Points</div>
          </div>
        </div>
        
        <div class="mt-4">
          <div class="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{{ dailyChallenge.progress }} / {{ dailyChallenge.target }}s</span>
          </div>
          <progress 
            class="progress progress-primary-content w-full" 
            :value="dailyChallenge.progress" 
            :max="dailyChallenge.target"
          ></progress>
        </div>

        <div v-if="dailyChallenge.completed" class="badge badge-success badge-lg mt-2">
          ✓ Completed!
        </div>
      </div>
    </div>

    <!-- Regular Challenges -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="challenge in challenges" 
        :key="challenge.id"
        class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all"
        :class="{ 'opacity-60': challenge.completed }"
      >
        <div class="card-body">
          <div class="flex items-center justify-between mb-4">
            <div class="text-5xl">{{ challenge.icon }}</div>
            <div v-if="challenge.completed" class="badge badge-success">
              ✓ Done
            </div>
            <div v-else class="badge badge-primary">{{ challenge.reward }} pts</div>
          </div>

          <h3 class="card-title">{{ challenge.title }}</h3>
          <p class="opacity-70 text-sm">{{ challenge.description }}</p>

          <div class="mt-4">
            <div class="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{{ challenge.progress }} / {{ challenge.target }}</span>
            </div>
            <progress 
              class="progress progress-primary w-full" 
              :value="challenge.progress" 
              :max="challenge.target"
            ></progress>
          </div>

          <div class="card-actions justify-end mt-4">
            <router-link 
              to="/typing-test" 
              class="btn btn-sm btn-primary"
              :class="{ 'btn-disabled': challenge.completed }"
            >
              {{ challenge.completed ? 'Completed' : 'Start' }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Completed Challenges Section -->
    <div v-if="completedChallenges.length > 0" class="mt-12">
      <h2 class="text-2xl font-bold mb-6">Completed Challenges 🏆</h2>
      <div class="flex flex-wrap gap-4">
        <div 
          v-for="challenge in completedChallenges" 
          :key="challenge.id"
          class="badge badge-lg badge-success gap-2 p-4"
        >
          <span class="text-2xl">{{ challenge.icon }}</span>
          <span>{{ challenge.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useChallengesStore } from '../stores/challenges'

const challengesStore = useChallengesStore()
const challenges = computed(() => challengesStore.challenges)
const dailyChallenge = computed(() => challengesStore.dailyChallenge)
const completedChallenges = computed(() => challengesStore.completedChallenges)

const formatTime = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date))
}
</script>
