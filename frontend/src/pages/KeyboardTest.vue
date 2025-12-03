<template>
  <div class="container mx-auto px-4 py-4 sm:py-8">
    <h1 class="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
      <span class="text-gradient">Keyboard Tester</span>
    </h1>
    
    <div class="card bg-base-200 shadow-xl mb-8">
      <div class="card-body">
        <div class="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div class="stat">
            <div class="stat-title">Total Keys Pressed</div>
            <div class="stat-value text-primary">{{ keyStats.totalPressed }}</div>
          </div>
          
          <div class="stat">
            <div class="stat-title">Last Key</div>
            <div class="stat-value text-secondary text-2xl">
              {{ keyStats.lastKey || '-' }}
            </div>
          </div>
          
          <div class="stat">
            <div class="stat-title">Currently Pressed</div>
            <div class="stat-value text-accent text-2xl">
              {{ pressedKeys.size }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Keyboard Theme</h2>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-sm btn-outline">
              {{ currentTheme.name }}
            </label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-lg bg-base-200 rounded-box w-52 mt-2">
              <li v-for="theme in themes" :key="theme.id">
                <a @click="setTheme(theme.id)" :class="{ 'active': currentThemeId === theme.id }">
                  <div 
                    class="w-4 h-4 rounded-full" 
                    :style="{ backgroundColor: theme.colors.pressed }"
                  ></div>
                  {{ theme.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <KeyboardLayout :pressedKeys="pressedKeys" />
      </div>
    </div>

    <div class="text-center mt-8">
      <p class="text-lg opacity-70">Press any key on your keyboard to test it</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useKeyboard } from '../composables/useKeyboard'
import { useKeyboardThemesStore } from '../stores/keyboardThemes'
import KeyboardLayout from '../components/keyboard/KeyboardLayout.vue'

const { pressedKeys, keyStats } = useKeyboard()
const themesStore = useKeyboardThemesStore()
const themes = computed(() => themesStore.themes)
const currentTheme = computed(() => themesStore.currentTheme)
const currentThemeId = computed(() => themesStore.currentThemeId)
const setTheme = themesStore.setTheme
</script>
