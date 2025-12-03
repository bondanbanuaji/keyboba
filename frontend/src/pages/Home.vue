<template>
  <div class="min-h-screen">
    <BackgroundScene />
    <section class="hero min-h-[80vh] bg-base-200 relative overflow-hidden">
      <div class="hero-content text-center z-10 px-4">
        <div class="max-w-3xl">
          <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to <span class="text-gradient">KeyBoba</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl mb-8 opacity-80">
            Test your keyboard, improve your typing speed, and compete with others!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <router-link to="/keyboard-test" class="btn btn-primary btn-lg">
              Test Keyboard
            </router-link>
            <router-link to="/typing-test" class="btn btn-secondary btn-lg">
              Start Typing Test
            </router-link>
          </div>
        </div>
      </div>
      
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div class="absolute bottom-10 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
    </section>

    <section class="py-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
            <div class="card-body items-center text-center">
              <div class="text-5xl mb-4">⌨️</div>
              <h3 class="card-title">Keyboard Tester</h3>
              <p>Test all keys on your keyboard with real-time visual feedback</p>
            </div>
          </div>
          
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
            <div class="card-body items-center text-center">
              <div class="text-5xl mb-4">⚡</div>
              <h3 class="card-title">Typing Test</h3>
              <p>Improve your WPM and accuracy with various difficulty levels</p>
            </div>
          </div>
          
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
            <div class="card-body items-center text-center">
              <div class="text-5xl mb-4">🏆</div>
              <h3 class="card-title">Leaderboards</h3>
              <p>Compete with others and climb to the top of the rankings</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 bg-base-200">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to get started?</h2>
        <p class="text-xl mb-8 opacity-80">Join thousands of users improving their typing skills</p>
        <router-link to="/typing-test" class="btn btn-gradient btn-lg text-white">
          Start Now
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAnimations } from '../composables/useAnimations'
import { useSmoothScroll } from '../composables/useSmoothScroll'
import BackgroundScene from '../components/three/BackgroundScene.vue'

const { fadeIn } = useAnimations()
useSmoothScroll()

onMounted(() => {
  const hero = document.querySelector('.hero-content')
  if (hero) fadeIn(hero, 1)
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
