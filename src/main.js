import './assets/normalize.css'

import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import VueGtm from '@gtm-support/vue-gtm';

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

createApp(App).use(router).use(metaManager).use(VueGtm, {
    id: 'GTM-MVCMGCKK', // Your GTM ID here
    vueRouter: router, // Pass your router instance if you want automatic event tracking based on routes
    enabled: true, // Whether or not GTM should be loaded
    debug: false, // Whether or not to display debug logs
    loadScript: true, // Whether or not to load the GTM script in the <head> tag
    trackOnNextTick: false // Whether or not to call trackView in Vue.nextTick
  }).mount('#app')
