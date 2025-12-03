<template>
  <div 
    class="key"
    :class="{ 'key-pressed': isPressed }"
    :style="{ 
      width: `calc(${keyData.width * 3}rem - 0.25rem)`,
      '--key-base': theme.colors.base,
      '--key-border': theme.colors.border,
      '--key-pressed': theme.colors.pressed,
      '--key-pressed-text': theme.colors.pressedText
    }"
  >
    <span class="key-label">{{ keyData.label }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useKeyboardThemesStore } from '../../stores/keyboardThemes'

defineProps({
  keyData: {
    type: Object,
    required: true
  },
  isPressed: {
    type: Boolean,
    default: false
  }
})

const themesStore = useKeyboardThemesStore()
const theme = computed(() => themesStore.currentTheme)
</script>

<style scoped>
.key {
  height: 3rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.1s ease;
  background: var(--key-base, oklch(var(--b3)));
  border: 2px solid var(--key-border, oklch(var(--bc) / 0.2));
  cursor: default;
  user-select: none;
}

.key:hover {
  filter: brightness(1.1);
}

.key-pressed {
  background: var(--key-pressed, oklch(var(--p)));
  color: var(--key-pressed-text, oklch(var(--pc)));
  border-color: var(--key-pressed, oklch(var(--p)));
  transform: scale(0.95);
  box-shadow: 0 0 20px var(--key-pressed, oklch(var(--p) / 0.5));
}

.key-label {
  pointer-events: none;
}
</style>
