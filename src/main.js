import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import {dom, library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Toaster from 'vue-toastification';
import './services/axios'
import {createPinia} from "pinia";
library.add(fas);
dom.watch()
const pinia = createPinia()



createApp(App)
    .component("font-awesome-icon",FontAwesomeIcon)
    .use(router)
    .use(Toaster)
    .use(pinia)
    .mount('#app')
