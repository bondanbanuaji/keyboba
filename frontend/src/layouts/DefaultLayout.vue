<template>
  <div class="min-h-screen flex flex-col bg-base-100">
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/ui/Navbar.vue'
import Footer from '../components/ui/Footer.vue'
</script>
