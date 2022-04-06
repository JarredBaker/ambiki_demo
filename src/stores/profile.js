import { defineStore } from "pinia";
import { profile } from "@/fakeData/profile.json";

/***
 *
 * Global store for the users profile
 * @global
 * @module stores/profile
 *
 *
 */
export const useProfileStore = defineStore("profile", {
  state: () => ({
    profile: {},
    profileLoadStatus: "idle",
  }),
  getters: {
    getProfile(state) {
      return state.profile;
    },
  },
  actions: {
    fetchProfile() {
      console.log("Fetching the users profile");
      this.$state.profile = profile;
    },
  },
});
