import { createApp } from 'vue';
import App from './App.vue';

import './assets/styles/main.scss';

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('id', savedTheme);
} else {
    // Definição de um tema padrão
    document.body.setAttribute('id', 'dark-mode');
}

createApp(App).mount('#app');
