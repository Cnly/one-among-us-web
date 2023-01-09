import {createApp, h} from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/solid.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'

// Import only the css necessary instead of importing everything:
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'
import 'element-plus/theme-chalk/el-overlay.css'

createApp(App).use(router).mount('#app')
