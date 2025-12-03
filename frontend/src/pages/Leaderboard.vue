<template>
  <div class="container mx-auto px-4 py-4 sm:py-8">
    <h1 class="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
      <span class="text-gradient">Leaderboard</span>
    </h1>

    <div class="flex justify-center mb-6">
      <div class="tabs tabs-boxed">
        <a 
          v-for="tab in tabs" 
          :key="tab.value"
          class="tab"
          :class="{ 'tab-active': selectedTab === tab.value }"
          @click="selectedTab = tab.value"
        >
          {{ tab.label }}
        </a>
      </div>
    </div>

    <div class="max-w-4xl mx-auto">
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <div class="overflow-x-auto">
            <table class="table">
              <thead>
                <tr>
                  <th class="text-center">Rank</th>
                  <th>Username</th>
                  <th class="text-center">WPM</th>
                  <th class="text-center">Accuracy</th>
                  <th class="text-center">Tests</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(entry, index) in currentLeaderboard" :key="entry.id"
                    :class="{ 'bg-base-300': entry.isCurrentUser }">
                  <td class="text-center">
                    <div class="font-bold" :class="getRankClass(index)">
                      {{ index + 1 }}
                      <span v-if="index < 3" class="ml-1">{{ getRankEmoji(index) }}</span>
                    </div>
                  </td>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar placeholder">
                        <div class="w-10 rounded-full" :class="entry.isCurrentUser ? 'bg-primary' : 'bg-neutral'">
                          <span class="text-sm">{{ entry.username[0].toUpperCase() }}</span>
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">
                          {{ entry.username }}
                          <span v-if="entry.isCurrentUser" class="badge badge-primary badge-sm ml-2">You</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">
                    <span class="badge badge-primary badge-lg">{{ entry.wpm }}</span>
                  </td>
                  <td class="text-center">
                    <span class="badge badge-secondary">{{ entry.accuracy }}%</span>
                  </td>
                  <td class="text-center">
                    <span class="opacity-70">{{ entry.totalTests }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <p class="opacity-70">Complete more typing tests to climb the leaderboard!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedTab = ref('global')

const tabs = [
  { label: 'Global', value: 'global' },
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' }
]

const globalLeaderboard = ref([
  { id: 1, username: 'SpeedTyper', wpm: 127, accuracy: 98, totalTests: 523, isCurrentUser: false },
  { id: 2, username: 'KeyboardMaster', wpm: 118, accuracy: 97, totalTests: 412, isCurrentUser: false },
  { id: 3, username: 'FastFingers', wpm: 112, accuracy: 96, totalTests: 389, isCurrentUser: false },
  { id: 4, username: 'TypeNinja', wpm: 105, accuracy: 95, totalTests: 356, isCurrentUser: false },
  { id: 5, username: 'QuickKeys', wpm: 98, accuracy: 94, totalTests: 298, isCurrentUser: false },
  { id: 6, username: 'CurrentUser', wpm: 87, accuracy: 93, totalTests: 142, isCurrentUser: true },
  { id: 7, username: 'TypingPro', wpm: 85, accuracy: 92, totalTests: 201, isCurrentUser: false },
  { id: 8, username: 'KeyStriker', wpm: 82, accuracy: 91, totalTests: 178, isCurrentUser: false },
  { id: 9, username: 'SwiftType', wpm: 79, accuracy: 90, totalTests: 156, isCurrentUser: false },
  { id: 10, username: 'RapidTyper', wpm: 76, accuracy: 89, totalTests: 134, isCurrentUser: false }
])

const dailyLeaderboard = ref([
  { id: 1, username: 'QuickDaily', wpm: 95, accuracy: 96, totalTests: 12, isCurrentUser: false },
  { id: 2, username: 'CurrentUser', wpm: 87, accuracy: 95, totalTests: 8, isCurrentUser: true },
  { id: 3, username: 'DayChamp', wpm: 84, accuracy: 94, totalTests: 15, isCurrentUser: false }
])

const weeklyLeaderboard = ref([
  { id: 1, username: 'WeeklyKing', wpm: 108, accuracy: 97, totalTests: 45, isCurrentUser: false },
  { id: 2, username: 'SpeedWeek', wpm: 102, accuracy: 96, totalTests: 38, isCurrentUser: false },
  { id: 3, username: 'CurrentUser', wpm: 87, accuracy: 94, totalTests: 25, isCurrentUser: true }
])

const currentLeaderboard = computed(() => {
  switch (selectedTab.value) {
    case 'daily':
      return dailyLeaderboard.value
    case 'weekly':
      return weeklyLeaderboard.value
    default:
      return globalLeaderboard.value
  }
})

const getRankClass = (index) => {
  if (index === 0) return 'text-warning'
  if (index === 1) return 'text-info'
  if (index === 2) return 'text-accent'
  return ''
}

const getRankEmoji = (index) => {
  const emojis = ['🥇', '🥈', '🥉']
  return emojis[index] || ''
}
</script>
