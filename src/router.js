import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList'
import EventShow from './views/EventShow'
import EventCreate from './views/EventCreate'

Vue.use(Router)

export default new Router({
  mode: 'history', // The production server needs to be correctly configurated
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    }
  ]
})
