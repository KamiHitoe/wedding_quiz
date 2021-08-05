
// import components
import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue"
import Quiz01 from "./components/Quiz01.vue"
import Quiz02 from "./components/Quiz02.vue"
import Result from "./components/Result.vue"

Vue.use(Router);

export default
new Router({
    mode: "history", // defaultはhash
    routes: [
        {path: '/', component: Home},
        {path: '/1', component: Quiz01},
        {path: '/2', component: Quiz02},
        {path: '/result', component: Result},
    ]
});

