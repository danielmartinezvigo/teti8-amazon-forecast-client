import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/_Home.vue'
import Datasets from '../views/Datasets.vue'
import DatasetGroups from '../views/DatasetGroups.vue'
import Forecasts from '../views/Forecasts.vue'
import Predictors from '../views/Predictors.vue'
import Query from '../views/Query.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/datasets',
    name: 'Datasets',
    component: Datasets
  },
  {
    path: '/datasets-groups',
    name: 'DatasetGroups',
    component: DatasetGroups
  },
  {
    path: '/forecasts',
    name: 'Forecasts',
    component: Forecasts
  },
  {
    path: '/predictors',
    name: 'Predictors',
    component: Predictors
  },
  {
    path: '/query',
    name: 'Query',
    component: Query
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
