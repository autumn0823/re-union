import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LogIn from "../page/LogIn.vue";
import UserTop from "../page/UserTop.vue";
import MyPage from "../page/MyPage.vue";
import ChatPage from "../page/ChatPage.vue";
import TopPage from "../page/TopPage.vue";
import MemberRegistrationPage from "../page/MemberRegistrationPage.vue";
import CompletRegistratPage from "../page/CompletRegistrat.vue";
import RegistratConfirm from "../page/RegistratConfirm.vue";
import ResetPassword from "../page/ResetPassword.vue";
import ResetPasswordComplete from "../page/ResetPasswordComplete.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/userTop",
    name: "top",
    component: UserTop,
  },
  {
    path: "/MyPage",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/ChatPage",
    name: "ChatPage",
    component: ChatPage,
  },
  {
    path: "/",
    name: "TopPage",
    component: TopPage,
  },
  {
    path: "/memberRegistrationPage",
    name: "MemberRegistrationPagepPage",
    component: MemberRegistrationPage,
  },
  {
    path: "/completRegistratPage",
    name: "CompletRegistratPage",
    component: CompletRegistratPage,
  },
  {
    path: "/registratConfirm",
    name: "RegistratConfirm",
    component: RegistratConfirm,
  },
  {
    path: "/resetPassword",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/resetPasswordComplete",
    name: "ResetPasswordComplete",
    component: ResetPasswordComplete,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export const goUserTop = () => {
  router.push("/userTop");
};

export const goChatPage = () => {
  router.push("/ChatPage");
};

export const goMyPage = () => {
  router.push("/MyPage");
};

export const goLoginPage = () => {
  router.push("/login");
};

export const goMemberRegistrationPage = () => {
  router.push("/memberRegistrationPage");
};

export const goCompletRegistratPage = () => {
  router.push("/completRegistratPage");
};

export default router;
