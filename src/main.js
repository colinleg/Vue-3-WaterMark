import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.css'
import  waterMark from 'vue3-watermark';

const app = createApp(App)
waterMark(app)

app.use(store).use(router).mount('#app')
