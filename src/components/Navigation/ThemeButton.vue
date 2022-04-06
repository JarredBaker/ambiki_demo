<script>
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/stores/theme';

export default {
  name: 'ThemeButton',
  setup() {
    const themeStore = useThemeStore();

    const { theme } = storeToRefs(themeStore);

    return {
      // you can return the whole store instance to use it in the template
      theme,
      themeStore
    }
  },

  methods: {
    toggleThemeBtn() {
      this.themeStore.toggleTheme();
    }
  }
}

</script>

<template>
  <div class="theme-button-align">
    <input @change="toggleThemeBtn" id="checkbox" type="checkbox" class="switch-checkbox" />
    <label for="checkbox" class="switch-label">
      <span>🌙</span>
      <span>☀️</span>
      <div class="switch-toggle" :class="{ 'switch-toggle-checked': theme === 'dark-theme' }"></div>
    </label>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.switch-checkbox {
  display: none;
}

.theme-button-align {
  bottom: 20px;
  position: absolute;
}

.switch-label {
  align-items: center;
  background: var(--text-primary-color);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.55);
  position: relative;
  padding: calc(var(--element-size) * 0.1);
  transition: background 0.5s ease;
  justify-content: space-between;
  width: var(--element-size);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.04);
  left: calc(var(--element-size) * 0.07);
  height: calc(var(--element-size) * 0.41);
  width: calc(var(--element-size) * 0.41);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.44)) !important;
}
</style>
