import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { auth } from './config/firebase';
import './index.css';

let mounted;

auth.onAuthStateChanged(() => {
  if (!mounted) {
    createApp(App)
      .use(router)
      .mount('#app');

    mounted = true;
  }
});
