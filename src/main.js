// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import your global CSS files
import './assets/css_files/styles.css'
import './assets/css_files/nav_styles.css'
import './assets/css_files/transition_styles.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
