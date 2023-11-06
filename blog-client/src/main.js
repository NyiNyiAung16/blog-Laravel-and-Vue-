import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import './assets/app.css'
import axios from 'axios'
import router from './router/router.js'
import store from './store/index.js'

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

store.dispatch('authenticate').then(()=>{
    createApp(App).use(router).use(store).mount('#app')
})

