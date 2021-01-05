import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile'
import Home from '../views/Home'

Vue.use(VueRouter)

// Using vue-router to create dynamic URL routes
export default new VueRouter({

    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/:username',
            name: 'Profile',
            component: Profile,
        }

    ]
})