<script>
export default {
  name: 'InSession',



  beforeRouteLeave(to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}

</script>

<template>
  <div class="app-con">
    <div class="about">
      <h1>In Session Page</h1>
    </div>
  </div>
</template>

<style scoped>
.about h1 {
  color: var(--text-primary-color);
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
