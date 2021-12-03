export default {
    path: '/movie',
    component: () =>
        import ('@/views/Movie/index.vue'),
    children: [{
            path: 'city',
            component: () =>
                import ('@/components/City/index.vue'),
        },
        {
            path: 'search',
            component: () =>
                import ('@/components/Search'),
        },
        {
            path: 'nowplaying',
            component: () =>
                import ('@/components/NowPlaying'),
        },
        {
            path: 'comingsoon',
            component: () =>
                import ('@/components/ComingSoon'),
        },
        {
            path: '/movie',
            redirect: '/movie/nowplaying',
        },
    ],
}