<script>
export default {
  name: 'CircleButton',
  props: {
    to: String
  }
}
</script>

<template>
  <router-link :to="to">
    <div class="item-circle">
      <slot name="icon"></slot>
    </div>
  </router-link>
</template> 

<style scoped>
.item-circle {
  background-color: var(--background-color-secondary);
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  box-shadow: 0 0 10px 1px var(--highlight-color);
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  color: var(--text-primary-color);
}
</style>
