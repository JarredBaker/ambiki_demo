<script>
import PatientCardLargeVue from '../components/Dashboard/PatientCardLarge.vue';
import PatientCardSmall from '../components/Dashboard/PatientCardSmall.vue';
import DashboardCalendarVue from '@/components/Dashboard/DashboardCalendar.vue';
import BarChart from '@/components/Charts/BarChart.vue';
import CircleButton from '@/components/Common/Buttons/CircleButton.vue';

/*     Dashoard API     */
import { fetchSessions } from '@/api/dashboardAPI';

export default {
  name: 'DashboardView',
  setup() {
    const sessions = fetchSessions();
    const nextSession = sessions[0];
    const comingUpSessions = sessions.slice(1, sessions.length);

    return {
      sessions,
      nextSession,
      comingUpSessions
    }
  },
  components: { PatientCardLargeVue, PatientCardSmall, DashboardCalendarVue, BarChart, CircleButton },
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
      </div>

      <div class="row-dashboard">
        <div class="column-left-bottom">
          <h5 class="headings">Next Patient</h5>
          <PatientCardLargeVue>
            <template #name>{{ nextSession.name }}</template>
            <template
              #time
            >{{ nextSession.session_DT.getHours() }}:{{ nextSession.session_DT.getMinutes() }}</template>
          </PatientCardLargeVue>

          <h5 class="headings">Coming up:</h5>
          <PatientCardSmall v-for="client in comingUpSessions" :key="client.id">
            <template #name>{{ client.name }}</template>
            <template #time>{{ client.session_DT.getHours() }}:{{ client.session_DT.getMinutes() }}</template>
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
.headings {
  color: var(--text-primary-color);
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 10px;
}

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
  max-height: 70vh;
  background-color: var(--background-color-primary);
  padding-left: 40px;
  overflow: scroll;
  padding-bottom: 20px;
}

.column-left-bottom::-webkit-scrollbar {
  display: none;
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