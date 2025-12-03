<template>
  <div class="keyboard-container">
    <div class="keyboard">
      <div v-for="row in keyboardLayout" :key="row.id" class="keyboard-row">
        <Key 
          v-for="key in row.keys" 
          :key="key.code"
          :keyData="key"
          :isPressed="pressedKeys.has(key.code)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Key from './Key.vue'

defineProps({
  pressedKeys: {
    type: Set,
    required: true
  }
})

const keyboardLayout = [
  {
    id: 'row-1',
    keys: [
      { code: 'Escape', label: 'Esc', width: 1 },
      { code: 'F1', label: 'F1', width: 1 },
      { code: 'F2', label: 'F2', width: 1 },
      { code: 'F3', label: 'F3', width: 1 },
      { code: 'F4', label: 'F4', width: 1 },
      { code: 'F5', label: 'F5', width: 1 },
      { code: 'F6', label: 'F6', width: 1 },
      { code: 'F7', label: 'F7', width: 1 },
      { code: 'F8', label: 'F8', width: 1 },
      { code: 'F9', label: 'F9', width: 1 },
      { code: 'F10', label: 'F10', width: 1 },
      { code: 'F11', label: 'F11', width: 1 },
      { code: 'F12', label: 'F12', width: 1 }
    ]
  },
  {
    id: 'row-2',
    keys: [
      { code: 'Backquote', label: '`', width: 1 },
      { code: 'Digit1', label: '1', width: 1 },
      { code: 'Digit2', label: '2', width: 1 },
      { code: 'Digit3', label: '3', width: 1 },
      { code: 'Digit4', label: '4', width: 1 },
      { code: 'Digit5', label: '5', width: 1 },
      { code: 'Digit6', label: '6', width: 1 },
      { code: 'Digit7', label: '7', width: 1 },
      { code: 'Digit8', label: '8', width: 1 },
      { code: 'Digit9', label: '9', width: 1 },
      { code: 'Digit0', label: '0', width: 1 },
      { code: 'Minus', label: '-', width: 1 },
      { code: 'Equal', label: '=', width: 1 },
      { code: 'Backspace', label: 'Backspace', width: 2 }
    ]
  },
  {
    id: 'row-3',
    keys: [
      { code: 'Tab', label: 'Tab', width: 1.5 },
      { code: 'KeyQ', label: 'Q', width: 1 },
      { code: 'KeyW', label: 'W', width: 1 },
      { code: 'KeyE', label: 'E', width: 1 },
      { code: 'KeyR', label: 'R', width: 1 },
      { code: 'KeyT', label: 'T', width: 1 },
      { code: 'KeyY', label: 'Y', width: 1 },
      { code: 'KeyU', label: 'U', width: 1 },
      { code: 'KeyI', label: 'I', width: 1 },
      { code: 'KeyO', label: 'O', width: 1 },
      { code: 'KeyP', label: 'P', width: 1 },
      { code: 'BracketLeft', label: '[', width: 1 },
      { code: 'BracketRight', label: ']', width: 1 },
      { code: 'Backslash', label: '\\', width: 1.5 }
    ]
  },
  {
    id: 'row-4',
    keys: [
      { code: 'CapsLock', label: 'Caps', width: 1.75 },
      { code: 'KeyA', label: 'A', width: 1 },
      { code: 'KeyS', label: 'S', width: 1 },
      { code: 'KeyD', label: 'D', width: 1 },
      { code: 'KeyF', label: 'F', width: 1 },
      { code: 'KeyG', label: 'G', width: 1 },
      { code: 'KeyH', label: 'H', width: 1 },
      { code: 'KeyJ', label: 'J', width: 1 },
      { code: 'KeyK', label: 'K', width: 1 },
      { code: 'KeyL', label: 'L', width: 1 },
      { code: 'Semicolon', label: ';', width: 1 },
      { code: 'Quote', label: "'", width: 1 },
      { code: 'Enter', label: 'Enter', width: 2.25 }
    ]
  },
  {
    id: 'row-5',
    keys: [
      { code: 'ShiftLeft', label: 'Shift', width: 2.25 },
      { code: 'KeyZ', label: 'Z', width: 1 },
      { code: 'KeyX', label: 'X', width: 1 },
      { code: 'KeyC', label: 'C', width: 1 },
      { code: 'KeyV', label: 'V', width: 1 },
      { code: 'KeyB', label: 'B', width: 1 },
      { code: 'KeyN', label: 'N', width: 1 },
      { code: 'KeyM', label: 'M', width: 1 },
      { code: 'Comma', label: ',', width: 1 },
      { code: 'Period', label: '.', width: 1 },
      { code: 'Slash', label: '/', width: 1 },
      { code: 'ShiftRight', label: 'Shift', width: 2.75 }
    ]
  },
  {
    id: 'row-6',
    keys: [
      { code: 'ControlLeft', label: 'Ctrl', width: 1.5 },
      { code: 'MetaLeft', label: 'Win', width: 1.25 },
      { code: 'AltLeft', label: 'Alt', width: 1.25 },
      { code: 'Space', label: '', width: 6.25 },
      { code: 'AltRight', label: 'Alt', width: 1.25 },
      { code: 'MetaRight', label: 'Win', width: 1.25 },
      { code: 'ControlRight', label: 'Ctrl', width: 1.5 }
    ]
  }
]
</script>

<style scoped>
.keyboard-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
  overflow-x: auto;
  width: 100%;
}

.keyboard {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: fit-content;
}

.keyboard-row {
  display: flex;
  gap: 0.25rem;
  justify-content: center;
}

@media (max-width: 768px) {
  .keyboard-container {
    padding: 0.5rem;
  }
  
  .keyboard {
    transform: scale(0.7);
    transform-origin: center;
  }
}

@media (max-width: 480px) {
  .keyboard {
    transform: scale(0.5);
  }
}
</style>
