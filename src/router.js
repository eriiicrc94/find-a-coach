import { createRouter, createWebHistory } from 'vue-router'

import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import CoachesList from './pages/coaches/CoachesList.vue'

import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestReceived from './pages/requests/RequestReceived.vue'

import NotFound from './pages/NotFound.vue'

 const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/coaches'
        },
        {
            path: '/coaches', component: CoachesList
        },
        {
            path: '/coaches/:id', component: CoachDetail, 
            props: true, // it sends :id as props to component
            children: [
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
export default router