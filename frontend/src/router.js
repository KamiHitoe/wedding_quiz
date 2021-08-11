// import components
import Vue from "vue"
import Router from "vue-router"
import Home from "./components/Home.vue"
import Quiz01 from "./components/Quiz01.vue"
import Quiz02 from "./components/Quiz02.vue"
import Quiz03 from "./components/Quiz03.vue"
import Quiz04 from "./components/Quiz04.vue"
import Quiz05 from "./components/Quiz05.vue"
import Quiz06 from "./components/Quiz06.vue"
import Quiz07 from "./components/Quiz07.vue"
import Quiz08 from "./components/Quiz08.vue"
import Quiz09 from "./components/Quiz09.vue"
import Quiz10 from "./components/Quiz10.vue"
import Result from "./components/Result.vue"
import Ranking from "./components/Ranking.vue"

// Pluginを全体で使用
Vue.use(Router);

export default
new Router({
  mode: "history", // defaultはhash
  // SPAでもページ上部に遷移
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {path: '/', component: Home},
    {path: '/1', component: Quiz01},
    {path: '/2', component: Quiz02},
    {path: '/3', component: Quiz03},
    {path: '/4', component: Quiz04},
    {path: '/5', component: Quiz05},
    {path: '/6', component: Quiz06},
    {path: '/7', component: Quiz07},
    {path: '/8', component: Quiz08},
    {path: '/9', component: Quiz09},
    {path: '/10', component: Quiz10},
    {path: '/result', component: Result},
    {path: '/ranking', component: Ranking},
  ],
});

