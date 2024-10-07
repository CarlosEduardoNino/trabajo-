import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css'
import App from './App.vue'
import {router} from "./routes/routes.js"
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
const myapp = createApp(App)

myapp.use(Quasar, {
    plugins: {}, 
  })
myapp.use(router)

myapp.mount('#app')
