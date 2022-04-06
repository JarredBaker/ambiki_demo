<script>
import CircleButton from "@/components/Common/Buttons/CircleButton.vue";
import PieChart from "@/components/Charts/PieChart.vue";
import TagAndIncrementTool from "../components/SessionTools/TagAndIncrementTool.vue";

export default {
  name: 'InSession',
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  },

  components: {
    CircleButton,
    PieChart,
    TagAndIncrementTool
}
}

</script>

<template>
  <div class="app-con">
    <div class="top-row">
      <div class="client-card">
        <img src="@/assets/person.jpg" class="profile-picture" />
        <div class="client-profile-details">
          <h3>Sam John</h3>
          <p>required to do so. While denying process notes may seem very unfair that.. ..</p>
          <div class="client-details-row">
            <h5>Gender: M</h5>
            <h5>Age: 32</h5>
          </div>
        </div>
        <div class="time-circle">
          <h3>41 mins</h3>
        </div>
      </div>
      <div class="mini-nav-con">
        <CircleButton to="/">
          <template #icon>
            <b-icon icon="person-fill" style="width: 40px; height: 40px;"></b-icon>
          </template>
        </CircleButton>

        <CircleButton to="/">
          <template #icon>
            <b-icon icon="plus" style="width: 40px; height: 40px;"></b-icon>
          </template>
        </CircleButton>
      </div>
    </div>

    <div class="session-details-row">
      <div class="session-details-left">
        <div class="container-wp-nopad">
          <div class="item-details-header-con">
            <h5>Last Session Visit notes</h5>
          </div>
          <div class="item-details-body">
            <p>
              Lo,em if)Wm dolOI Sit amet. consectetur
              adipi:Sd.ng N.11. Nunc: maxim us, null ut oommodo s.agiuis.
            </p>
          </div>
        </div>

        <div class="container-wp-nopad">
          <div class="item-details-header-con">
            <h5>STG3 Weak points</h5>
          </div>
          <div class="item-details-body-chart">
            <PieChart />
          </div>
        </div>
      </div>
      <div class="session-details-right">
        <h3>Active Session Visit Notes</h3>
        <textarea class="session-note-input" />
        <h3>Working points</h3>

        <MoodTool></MoodTool>
        <TagAndIncrementTool/>
      </div>
    </div>

    <div class="save-row">
      <button class="btn btn-primary save-btn">Save Session</button>
    </div>
  </div>
</template>

<style scoped>
h3,
h5,
p {
  color: var(--text-primary-color);
}



.client-details-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.client-details-row > h5 {
  padding-right: 20px
}

.item-details-body {
  padding: 20px;
}

.item-details-body-chart {
  padding: 50px;
}

.save-btn {
  align-self: center;
  width: 60%;
  background-color: rgba(40, 131, 250, 0.5);
  height: 40px;
  border-radius: 40px;
}

.session-details-left {
  width: 30%;
  padding-right: 20px;
}

.session-details-right {
  width: 65%;
}

.item-details-header-con {
  width: 100%;
  height: 50px;
  padding: 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: rgba(40, 131, 250, 0.5);
}

.container-wp-nopad {
  width: 100%;
  border: 0px;
  border-radius: 25px;
  min-height: 200px;
  background-color: var(--background-color-secondary);
  color: var(--text-primary-color);
  margin-bottom: 20px;
}

.session-note-input {
  width: 100%;
  border: 0px;
  border-radius: 25px;
  min-height: 200px;
  background-color: var(--background-color-secondary);
  padding: 20px;
  color: var(--text-primary-color);
}
textarea:focus,
input:focus {
  outline: none;
}

.time-circle {
  width: 21vh;
  height: 21vh;
  border-radius: 21vh;
  margin: 2vh;
  background-color: rgba(40, 131, 250, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.client-profile-details {
  width: calc(90% - 30vh);
  height: 21vh;
  padding: 5vh;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
}

.profile-picture {
  width: 21vh;
  height: 21vh;
  border-radius: 21vh;
  margin: 2vh;
}
.mini-nav-con {
  width: 5%;
  height: 5%;
  padding-top: 2vh;
  padding-left: 20px;
}

.app-con {
  padding: 30px;
  font-size: 13px;
}
.client-card {
  width: 90%;
  border-radius: 25vh;
  background-color: var(--background-color-secondary);
  height: 25vh;
  display: flex;
  flex-direction: row;
}

.top-row {
  display: flex;
  flex-direction: row;
  width: calc(100vw - var(--navbar-width));
  height: 30vh;
}

.session-details-row {
  display: flex;
  flex-direction: row;
  width: calc(100vw - var(--navbar-width));
  min-height: 70vh;
}

.save-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: calc(100vw - var(--navbar-width));
}
</style>
