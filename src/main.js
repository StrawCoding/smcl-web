import { createApp } from 'vue'
import App from './App.vue'
import router from './router/main.js'


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')