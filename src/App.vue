<script>
import NavBar from "@/components/Navigation/NavBar.vue";

export default {
  name: 'App',
  components: { NavBar },
};
</script>

<template>
  <div id="app">
    <div class="container-center">
      <NavBar />
      <router-view></router-view>
    </div>
  </div>
</template>


<style>
html,
body {
  padding: 0;
  margin: 0;
}
/* Define styles for the default root window element */
:root {
  --background-color-primary: #dddbdb;
  --background-color-secondary: #fafafa;
  --accent-color: #cccccc;
  --highlight-color: #008ae6;
  --text-primary-color: #222;
  --element-size: 4.5rem;
  --navbar-width: 75px;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #111111;
  --background-color-secondary: #2d2d30;
  --accent-color: #464646;
  --highlight-color: #008ae6;
  --text-primary-color: #ddd;
}

p {
  color: var(--text-primary-color);
}

.container-center {
  background-color: var(--background-color-primary);
  min-height: 100vh;
  height: auto;
  min-width: calc(100vw - var(--navbar-width));
  max-width: calc(100vw - var(--navbar-width));
  right: 0px;
  margin-left: var(--navbar-width);
  display: flex;
}

.welcome-header {
  color: var(--text-primary-color);
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
}

.app-con {
  min-height: max-content;
  width: calc(100vw - var(--navbar-width));
  background-color: var(--background-color-primary);
}

.nav-bar {
  background-color: var(--background-color-secondary);
  height: 100vh;
  width: var(--navbar-width);
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 30vh;
}

.card {
  padding: 2rem 4rem;
  height: 200px;
  width: 300px;
  text-align: center;
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  background-color: var(--background-color-secondary);
}
</style>