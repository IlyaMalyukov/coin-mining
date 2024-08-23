import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueTelegramPlugin } from 'vue-tg'
import './style.css'
import { router } from './router'
import App from './ui.vue'

const app = createApp(App);

const pinia = createPinia();

app.use(router)
app.use(pinia)
app.use(VueTelegramPlugin)
app.mount('#app')
