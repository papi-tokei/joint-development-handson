import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User1 from "../views/user1/User1.vue";
import User2 from "../views/user2/User2.vue";
import User3 from "../views/user3/User3.vue";
import User4 from "../views/user4/User4.vue";
import User5 from "../views/user5/User5.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/user1",
    name: "User1",
    component: User1
  },
  {
    path: "/user2",
    name: "User2",
    component: User2
  },
  {
    path: "/user3",
    name: "User3",
    component: User3
  },
  {
    path: "/user4",
    name: "User4",
    component: User4
  },
  {
    path: "/user5",
    name: "User5",
    component: User5
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
