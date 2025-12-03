<template>
  <div class="container mx-auto px-4 py-4 sm:py-8">
    <h1 class="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
      <span class="text-gradient">Profile</span>
    </h1>

    <div v-if="!isAuthenticated" class="card bg-base-200 shadow-xl max-w-2xl mx-auto">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-2xl mb-4">Sign in to view your profile</h2>
        <p class="mb-6 opacity-70">Track your progress, view your stats, and compete on the leaderboard</p>
        <button class="btn btn-primary btn-lg">
          Sign In with Clerk
        </button>
      </div>
    </div>

    <div v-else class="max-w-6xl mx-auto">
      <!-- Streak Badge -->
      <div class="mb-8">
        <StreakBadge :streak="stats.streak" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="avatar placeholder mb-4">
              <div class="bg-primary text-primary-content rounded-full w-24">
                <span class="text-4xl">{{ userInitial }}</span>
              </div>
            </div>
            <h2 class="card-title">{{ user?.username || 'User' }}</h2>
            <p class="opacity-70">{{ user?.email }}</p>
          </div>
        </div>

        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-primary">Best WPM</h3>
            <p class="text-5xl font-bold">{{ stats.bestWPM }}</p>
            <p class="opacity-70">Personal record</p>
          </div>
        </div>

        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-secondary">Average WPM</h3>
            <p class="text-5xl font-bold">{{ stats.averageWPM }}</p>
            <p class="opacity-70">Across all tests</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title mb-4">Statistics</h3>
            <div class="stats stats-vertical shadow">
              <div class="stat">
                <div class="stat-title">Total Tests</div>
                <div class="stat-value text-primary">{{ stats.totalTests }}</div>
              </div>
              
              <div class="stat">
                <div class="stat-title">Total Keys Pressed</div>
                <div class="stat-value text-secondary">{{ stats.totalKeys }}</div>
              </div>
              
              <div class="stat">
                <div class="stat-title">Current Streak</div>
                <div class="stat-value text-accent">{{ stats.streak }} days</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title mb-4">Achievements</h3>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="achievement in achievements" :key="achievement.id" 
                   class="badge badge-lg gap-2 p-4"
                   :class="achievement.unlocked ? 'badge-primary' : 'badge-ghost'">
                <span class="text-2xl">{{ achievement.icon }}</span>
                <span class="text-sm">{{ achievement.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h3 class="card-title mb-4">Recent Tests</h3>
          <div class="overflow-x-auto">
            <table class="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>WPM</th>
                  <th>Accuracy</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="test in recentTests" :key="test.id">
                  <td>{{ formatDate(test.date) }}</td>
                  <td><span class="badge badge-primary">{{ test.wpm }}</span></td>
                  <td><span class="badge badge-secondary">{{ test.accuracy }}%</span></td>
                  <td>{{ test.duration }}s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user'
import StreakBadge from '../components/ui/StreakBadge.vue'

const userStore = useUserStore()
const isAuthenticated = computed(() => userStore.isAuthenticated)
const user = computed(() => userStore.user)
const userInitial = computed(() => user.value?.username?.[0]?.toUpperCase() || 'U')

const stats = ref({
  bestWPM: 87,
  averageWPM: 65,
  totalTests: 142,
  totalKeys: 125847,
  streak: 7
})

const achievements = ref([
  { id: 1, name: 'First Timer', icon: '🎯', unlocked: true },
  { id: 2, name: 'Speed Demon', icon: '⚡', unlocked: true },
  { id: 3, name: 'Accuracy Master', icon: '🎖️', unlocked: false },
  { id: 4, name: 'Marathon Typer', icon: '🏃', unlocked: false },
  { id: 5, name: 'Week Warrior', icon: '🔥', unlocked: true },
  { id: 6, name: 'Perfect Week', icon: '👑', unlocked: false }
])

const recentTests = ref([
  { id: 1, date: new Date(2025, 11, 3), wpm: 87, accuracy: 96, duration: 60 },
  { id: 2, date: new Date(2025, 11, 2), wpm: 82, accuracy: 94, duration: 30 },
  { id: 3, date: new Date(2025, 11, 1), wpm: 79, accuracy: 92, duration: 60 },
  { id: 4, date: new Date(2025, 10, 30), wpm: 75, accuracy: 95, duration: 30 },
  { id: 5, date: new Date(2025, 10, 29), wpm: 72, accuracy: 91, duration: 60 }
])

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}
</script>
