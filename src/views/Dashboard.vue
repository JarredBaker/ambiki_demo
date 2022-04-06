<script setup>
import PatientCardLargeVue from '../components/Dashboard/PatientCardLarge.vue';
import PatientCardSmall from '../components/Dashboard/PatientCardSmall.vue';
import DashboardCalendarVue from '@/components/Dashboard/DashboardCalendar.vue';
import BarChart from '@/components/Charts/BarChart.vue';
import ProfileButton from '@/components/Common/Buttons/ProfileButton.vue';

/*     Dashoard API     */
import { fetchSessions } from '@/api/dashboardAPI';
const sessions = fetchSessions();

console.log("THE SESSIONS: " + JSON.stringify(sessions));

export default {
  components: { PatientCardLargeVue, PatientCardSmall, DashboardCalendarVue, BarChart, ProfileButton },
};
</script>

<template>
  <main>
    <div class="app-con">
      <div class="row-dashboard">
        <div class="column-left">
          <div class="left-top-con">
            <h1 class="welcome-header">
              Welcome back,
              <br />Nate Hill!
            </h1>
          </div>
        </div>
        <div class="column-right">
          <div class="chart-con">
            <BarChart />
          </div>
          <div class="mini-nav-con">
            <ProfileButton to="/">
              <template #icon><b-icon icon="person-fill" style="width: 40px; height: 40px;"></b-icon></template>
            </ProfileButton>
          </div>
        </div>
      </div>

      <div class="row-dashboard">
        <div class="column-left-bottom">
          <h3 class="headings">Next Patient</h3>
          <PatientCardLargeVue>
            <template #name>James Cook</template>
          </PatientCardLargeVue>

          <h3 class="headings">Coming up:</h3>
          <PatientCardSmall>
            <template #name>Sam</template>
          </PatientCardSmall>
        </div>

        <div class="column-right-bottom">
          <div class="calender-con">
            <DashboardCalendarVue />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

.mini-nav-con {
  width: 100%;
  height: 100%;
  padding-top: 5vh;
  padding-left: 20px;
}

.left-top-con {
  width: 30vw;
  height: 30vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.column-left {
  width: 30vw;
  height: 70vh;
}

.column-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: calc(70vw - var(--navbar-width));
  height: 30vh;
  background-color: var(--background-color-primary);
}

.column-right-bottom {
  width: calc(70vw - var(--navbar-width));
  min-height: 70vh;
  background-color: var(--background-color-primary);
  background-color: var(--background-color-primary);
  padding-right: 20px;
}

.column-left-bottom {
  width: 30vw;
  min-height: 70vh;
  background-color: var(--background-color-primary);
  padding-left: 40px;
}

.row-dashboard {
  display: flex;
  flex-direction: row;
  width: calc(100vw - var(--navbar-width));
  height: 30vh;
}
.calender-con {
  width: 100%;
  height: calc(100vh - 30vh);
  padding-top: 5vh;
}

.chart-con {
  width: calc(100% - 100px);
  height: inherit;
}
.welcome-header {
  color: var(--text-primary-color);
  font-family: Arial, Helvetica, sans-serif;
}
</style>