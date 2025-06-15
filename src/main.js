import { createApp } from 'vue'
import App from './App.vue'
import router from './router/main.js'
import { FontAwesomeIcon } from './plugins/fontawesome'


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')

