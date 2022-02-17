import { createApp } from 'vue'
import App from './App.vue'
import router from '@/examples/router'
import SHElement from '@/packages/index'

import '../theme-chalk/theme.scss'
import '../theme-chalk/button.scss'
import '../theme-chalk/advanced-input.scss'
import '../theme-chalk/table.scss'
import '../theme-chalk/icon.scss'

const app = createApp(App)
app.use(SHElement, { size: 'small' });
app.use(router)
app.mount('#app')
