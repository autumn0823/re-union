import { createStore } from "vuex";
import {
  userInformation,
  UserInformationState,
} from "@/store/modules/user/userInformation";

export interface RootState {
  MyInformation: UserInformationState;
}

export default createStore({
  modules: { userInformation },
});

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });
