<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>
