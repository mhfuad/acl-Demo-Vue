import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from "bootstrap-vue-3";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import '@/store/subscriber';


axios.defaults.baseURL = "http://localhost:8001/api"
store.dispatch('auth/attempt', localStorage.getItem('token'))
.then(()=>{
    const app = createApp(App)

    app.use(router)
    app.use(BootstrapVue3)
    app.use(store)

    app.mount('#app')
})


