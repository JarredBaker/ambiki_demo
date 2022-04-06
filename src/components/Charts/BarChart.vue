<script>
import { Bar } from 'vue-chartjs/legacy';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    cssClasses: {
      default: 'chart-con',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<template>
  <div class="chart-card">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      css-classes="chart-con"
      :styles="styles"
    />
  </div>
</template>

<style scoped>
.chart-card {
  margin-top: 5vh;
  width: calc(70vw - var(--navbar-width) - 100px);
  height: 25vh;
  border-radius: 20px;
  border: 1px solid var(--accent-color);
  background-color: var(--background-color-secondary);
  padding: 20px;
}

.chart-con {
  width: 60%;
  height: 20vh;
  position: relative;
}
</style>
