<script>
import ThemeButton from "@/components/Navigation/ThemeButton.vue"
import NavItem from "@/components/Navigation/NavItem.vue"
export default {
  name: 'NavBar',
  components: { NavItem, ThemeButton },
};
</script>

<template>
  <div class="nav-bar">
    <NavItem :to="'/'">
      <template #icon>
        <b-icon icon="calendar3" style="width: 25px; height: 25px;"></b-icon>
      </template>
    </NavItem>

    <NavItem :to="'/tools'">
      <template #icon>
        <b-icon icon="tools" style="width: 25px; height: 25px;"></b-icon>
      </template>
    </NavItem>

    <NavItem :to="'/clients'">
      <template #icon>
        <b-icon icon="file-earmark-person" style="width: 25px; height: 25px;"></b-icon>
      </template>
    </NavItem>

    <ThemeButton />
  </div>
</template>