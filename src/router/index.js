import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/Home/home'
import Todos from "@/Views/Todos/index"
import Login from "@/Views/Login/index"
import Dashboard from "@/Views/Dashboard/index"

Vue.use(Router)
const routerName =  new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {guest: true}
    },
    {
      path: '',
      component: Dashboard,
      meta: {loginUser: true},
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/user/:id/todos',
          name: 'Todos',
          component: Todos
        },
      ]
    }
  ]
})

routerName.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.loginUser)) {
    if (localStorage.getItem('user')) {
      next();
      return;
    }
    next("/login");
  } else if(to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem('user')) {
      next("/");
      return;
    }
    next();
  }else{
    next();
  }
});

export default routerName