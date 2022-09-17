import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import "@element-plus/theme-chalk/dist/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far, fab);
// const app = createApp(App);
//コンポーネントの追加
// app.component("font-awesome-icon", FontAwesomeIcon);
// app.mount("#app");
// createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount("#app");
