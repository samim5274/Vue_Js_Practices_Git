import { createApp } from 'vue';
import App from './App.vue';
import ContactDetials from './ContactDetials.vue';

// createApp(App).mount('#app')


// console.log(App);

var app = createApp(App);

app.component('contact-details', ContactDetials);

app.mount('#app');