<script>
export default {
  name: 'NavItem',
  props: {
    to: String
  },
}
</script>

<template>
  <router-link :to="to">
    <div class="item">
      <i v-if="this.$route.path === to" class="active">
        <slot name="icon"></slot>
        <div class="underline-active"></div>
      </i>
      <i v-else>
        <slot name="icon"></slot>
      </i>
    </div>
  </router-link>
</template> 

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  width: 70px;
  height: 70px;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 70px;
  height: 70px;

  color: var(--text-primary-color);
}

.active {
  color: var(--highlight-color);
  display: flex;
  flex-direction: column;
}
.underline-active {
  border-bottom: 0.5px solid var(--highlight-color);
  width: 30px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 5px;
  height: 2px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 70px;
    height: 70px;
  }

  .item:before {
    border-left: 1px solid var(--color-border);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
