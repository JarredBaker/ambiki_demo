import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import VueCompositionAPI from "@vue/composition-api";
import { createPinia, PiniaVuePlugin } from "pinia";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VCalendar from "v-calendar";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* Component Tool import for Global Use */
const ComponentContext = require.context(
  "@/components/SessionTools/",
  true,
  /\.vue$/i,
  "lazy"
);

ComponentContext.keys().forEach((componentFilePath) => {
  const componentName = componentFilePath.split("/").pop().split(".")[0];
  Vue.component(componentName, () => ComponentContext(componentFilePath));
});

Vue.use(VCalendar);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(PiniaVuePlugin);
Vue.use(VueCompositionAPI);
Vue.use(VueRouter);

const pinia = createPinia();
Vue.use(pinia);

Vue.config.productionTip = false;

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
