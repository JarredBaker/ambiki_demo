<script>
import CircleButtonFuc from "@/components/Common/Buttons/CircleButtonFuc.vue";

export default {
  name: 'MoodTool',
  components: {
    CircleButtonFuc
  },
  setup() {
    const options = [1, 2, 3, 4, 5];

    return {
      options
    }
  },
  methods: {
    selecMood(mood) {
      console.log("SELECTED " + mood)
    }
  }
}

</script>


<template>
  <div class="container-wp">
    <div class="wp-con-left">
      <h5>Patiens Mood</h5>
      <p>Patients mood releated to their injury, vocabulary...</p>
      <div class="emj-row">
        <div v-for="i in options" :key="i">
          <CircleButtonFuc :act="() => selecMood(options[i + 1])">
            <template #icon>
              <b-icon v-if="i === 1" icon="emoji-angry" style="width: 40px; height: 40px;"></b-icon>
              <b-icon v-else-if="i === 2" icon="emoji-frown" style="width: 40px; height: 40px;"></b-icon>
              <b-icon v-else-if="i === 3" icon="emoji-neutral" style="width: 40px; height: 40px;"></b-icon>
              <b-icon v-else-if="i === 4" icon="emoji-smile" style="width: 40px; height: 40px;"></b-icon>
              <b-icon v-else-if="i === 5" icon="emoji-laughing" style="width: 40px; height: 40px;"></b-icon>
            </template>
          </CircleButtonFuc>
        </div>
      </div>
    </div>
    <div class="wp-con-right c-orange"></div>
  </div>
</template>

<style scoped>
h3,
h5 {
  color: var(--text-primary-color);
}
.wp-con-left {
  width: 70%;
  min-height: 200px;
  padding: 30px;
}

.emj-row {
  display: flex;
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
}

.wp-con-right {
  width: 30%;
  min-height: 200px;
  padding: 30px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}

.container-wp {
  margin-bottom: 20px;
  width: 100%;
  border: 0px;
  border-radius: 25px;
  min-height: 200px;
  background-color: var(--background-color-secondary);
  color: var(--text-primary-color);
  display: flex;
  flex-direction: row;
}

.c-orange {
  background-color: rgba(250, 166, 40, 0.5);
}
</style>
