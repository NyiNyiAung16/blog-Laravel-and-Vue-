import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import './assets/app.css'
import axios from 'axios'
import router from './router/router.js'
import store from './store/index.js'

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.withCredentials = true;

createApp(App)
.use(router)
.use(store)
.mount('#app')
