import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
export default  new VueRouter({
  routes: [
    { path: '/',  component: () => import('./components/HelloWorld.vue') },
    { path: '/editor',  component: () => import('./components/editor.vue') },
  ]
})