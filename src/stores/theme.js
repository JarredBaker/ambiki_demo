import { defineStore } from "pinia";

/***
 *
 * Global store for the application theme
 * @global
 * @module stores/theme
 *
 *
 */
export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "light-theme",
  }),
  getters: {
    getTheme(state) {
      return state.theme;
    },
  },
  actions: {
    toggleTheme() {
      console.log("THEME SHOUDL CHANGE");

      if (this.theme === "dark-theme") {
        this.theme = "light-theme";
      } else {
        this.theme = "dark-theme";
      }
      document.documentElement.className = this.theme;
    },
  },
});
