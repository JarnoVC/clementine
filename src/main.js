import './assets/normalize.css'

import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import landingPage from './components/HomePage.vue'
import aboutPage from './components/AboutPage.vue'
import projectPage from './components/ProjectPage.vue'
import contactPage from './components/ContactPage.vue'

const routes = [
    { path: '/', component: landingPage, name: 'home', meta: { requiresAuth: false } },
    { path: '/about', component: aboutPage, name: 'about', meta: { requiresAuth: false } },
    { path: '/project', component: projectPage, name: 'project', meta: { requiresAuth: false } },
    { path: '/contact', component: contactPage, name: 'contact', meta: { requiresAuth: false } },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // If a saved position is available, use it
            return savedPosition;
        } else {
            // Otherwise, scroll to the top of the page
            return { top: 0 };
        }
    },
})

const metaManager = createMetaManager();

createApp(App).use(router).use(metaManager).mount('#app')
