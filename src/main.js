import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import {dom, library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Toaster from "@meforma/vue-toaster";
import './services/axios'
library.add(fas);
dom.watch()




createApp(App).component("font-awesome-icon",FontAwesomeIcon).use(router).use(Toaster).mount('#app')
