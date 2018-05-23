import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SearchRoute from '@/components/SearchRoute'
import BrowseStates from '@/components/BrowseStates'
import BrowsePracticeareas from '@/components/BrowsePracticeareas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'SearchRoute',
      component: SearchRoute
    },
    {
      path: '/states',
      name: 'BrowseStates',
      component: BrowseStates
    },
    {
      path: '/practice-areas',
      name: 'BrowsePracticeareas',
      component: BrowsePracticeareas
    }
  ]
})
