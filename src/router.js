import { createRouter, createWebHistory } from 'vue-router'

import CoachDetail from './pages/coaches/CouchDetail.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import CoachList from './pages/coaches/CoachList.vue'

import ContactCoach from './pages/contact/ContactCoach.vue'
import RequestReceived from './pages/contact/RequestReceived.vue'

import NotFound from './pages/NotFound.vue.vue'

export const router = createRouter({
    history: createWebHistory,
    routes: [
        {
            path: '/', redirect: '/coaches'
        },
        {
            path: '/coaches', component: CoachList
        },
        {
            path: '/coaches/:id', component: CoachDetail, children: [
                {   path: 'contact', component: ContactCoach    } // /coaches/c1/contact
            ]
        },
        {
            path: '/register', component: CoachRegistration
        },
        {
            path: '/contact', component: ContactCoach
        },
        {
            path: '/requests', component: RequestReceived
        },
        {
            path: '/:notFound(.*)', component: NotFound
        }
    ]
})