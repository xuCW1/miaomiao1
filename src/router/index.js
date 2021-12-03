import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from '@/router/movie/index.js'
import cinemaRouter from '@/router/cinema/index.js'
import mineRouter from '@/router/mine/index.js'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [movieRouter, cinemaRouter, mineRouter, { path: '/*', redirect: '/movie' }],
})