<script>
import CircleButtonFuc from "@/components/Common/Buttons/CircleButtonFuc.vue";

export default {
  name: 'MoodTool',
  components: {
    CircleButtonFuc
  }
}

</script>


<template>
  <div class="container-wp">
    <div class="wp-con-left">
      <h5>Expressive/Pragmatic Language</h5>
      <p>STG2: This is the week points that fall under...</p>
      <div class="emj-row">
        <h3>Sun</h3>
        <div class="add-minus-div">
          <CircleButtonFuc :act="() => { }">
            <template #icon>
              <b-icon icon="hand-thumbs-up" style="width: 40px; height: 40px;"></b-icon>
            </template>
          </CircleButtonFuc>
          <CircleButtonFuc :act="() => { }">
            <template #icon>
              <b-icon icon="hand-thumbs-down" style="width: 40px; height: 40px;"></b-icon>
            </template>
          </CircleButtonFuc>
        </div>
      </div>
    </div>
    <div class="wp-con-right c-blue"></div>
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

.add-minus-div {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.emj-row {
  display: flex;
  height: 90px;
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background-color: var(--background-color-primary);
  border-radius: 90px;
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

.c-blue {
  background-color: rgba(40, 148, 250, 0.5);
}
</style>
