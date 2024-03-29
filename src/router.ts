import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Todo from './views/todos/Todo.vue';
import Edit from './views/todos/EditTodo.vue';
import newTodo from './views/todos/NewTodo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/newTodo',
      name: 'newTodo',
      component: newTodo,
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
    },
    {
      path: '/edit/:item',
      name: 'edit',
      component: Edit,
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
