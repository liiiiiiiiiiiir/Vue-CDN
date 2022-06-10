import App from './App';
import './scss/init.scss';
import './scss/App.scss';
import router from '@/router';

const { createApp } = Vue;
const { createPinia } = Pinia;

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(naive).mount('#app');

