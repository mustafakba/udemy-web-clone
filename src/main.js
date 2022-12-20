import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import './assets/tailwind.css'
import router from "../src/router.js";
import store from "./store";
import 'tw-elements';





const app = createApp( App );
app.use(router)
app.use( VueSplide );
app.use(store)
app.mount( '#app' );
