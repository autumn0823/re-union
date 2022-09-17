import { Module, ActionContext } from "vuex";
import { RootState } from "../../index";
import {
  registerInformation,
  registerForm,
} from "../../types/user/userInformation";

export interface UserInformationState {
  userInfomation: registerInformation | null;
}

export const userInformation: Module<UserInformationState, RootState> = {
  namespaced: true,
  state: () => ({
    userInfomation: null,
  }),
  mutations: {
    setUserInfomation(state: UserInformationState, registerForm: registerForm) {
      // console.dir({ ...registerForm });
      delete registerForm.checkPass;
      state.userInfomation = registerForm;
    },
    resetUserInfomation(state: UserInformationState) {
      state.userInfomation = null;
    },
    // getters: {
    //   doubleCount(state, getters, rootState) {
    //     console.log(rootState.ModuleB.counter);
    //     return state.count * 2;
    //   },
    // },
    // actions: {
    //   incrementIfOddOnRootSum({ state, commit, rootState }) {
    //     if ((state.count + rootState.Counter.counter) % 2 === 1) {
    //       commit("increment");
    //     }
    //   },
  },
  getters: {
    getUserInfomation(state, getters, rootState) {
      return state.userInfomation;
    },
  },
};
