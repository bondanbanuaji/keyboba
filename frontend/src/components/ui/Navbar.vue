<template>
  <nav class="navbar bg-base-200 shadow-lg px-2 sm:px-4 sticky top-0 z-50 min-h-[4rem]">
    <div class="navbar-start">
      <router-link to="/" class="btn btn-ghost text-lg sm:text-xl font-bold px-2 sm:px-4">
        <span class="text-gradient">KeyBoba</span>
      </router-link>
    </div>
    
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 gap-2">
        <li><router-link to="/" class="btn btn-ghost">Home</router-link></li>
        <li><router-link to="/keyboard-test" class="btn btn-ghost">Keyboard Test</router-link></li>
        <li><router-link to="/typing-test" class="btn btn-ghost">Typing Test</router-link></li>
        <li><router-link to="/challenges" class="btn btn-ghost">Challenges</router-link></li>
        <li><router-link to="/leaderboard" class="btn btn-ghost">Leaderboard</router-link></li>
      </ul>
    </div>
    
    <div class="navbar-end gap-1 sm:gap-2">
      <div class="hidden sm:block">
        <SoundToggle />
      </div>
      <ThemeToggle />
      <router-link v-if="!isAuthenticated" to="/profile" class="btn btn-primary">
        Sign In
      </router-link>
      <div v-else class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
            <span class="text-lg">{{ userInitial }}</span>
          </div>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-200 rounded-box w-52">
          <li><router-link to="/profile">Profile</router-link></li>
          <li><a @click="handleSignOut">Sign Out</a></li>
        </ul>
      </div>
      
      <div class="dropdown lg:hidden">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-200 rounded-box w-52">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/keyboard-test">Keyboard Test</router-link></li>
          <li><router-link to="/typing-test">Typing Test</router-link></li>
          <li><router-link to="/challenges">Challenges</router-link></li>
          <li><router-link to="/leaderboard">Leaderboard</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '../../stores/user'
import ThemeToggle from './ThemeToggle.vue'
import SoundToggle from './SoundToggle.vue'

const userStore = useUserStore()
const isAuthenticated = computed(() => userStore.isAuthenticated)
const userInitial = computed(() => userStore.user?.username?.[0]?.toUpperCase() || 'U')

const handleSignOut = () => {
  userStore.clearUser()
}
</script>
