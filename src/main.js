import { createApp } from 'vue'
import App from './App.vue'

import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import './assets/tailwind.css'

import store from "./store";
const app = createApp( App );

app.use( VueSplide );
app.use(store)
app.mount( '#app' );
