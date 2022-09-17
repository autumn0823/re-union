<template>
  <div class="registration-page">
    <div>
      <MainHeader :generalPage="true" />
    </div>
    <div class="main">
      <div class="main-label">
        <div class="label">新規プロフィール</div>
        <div class="line"></div>
        <div class="text">
          こちらで登録いただいた情報をもとに、あなたのプロフィールを作成いたします！
        </div>
      </div>
      <el-form
        ref="formRef"
        :model="form"
        status-icon
        :rules="rules"
        label-width="120px"
        class="form"
        label-position="top"
      >
        <el-form-item prop="name" label="名前（ニックネームでも可）">
          <div class="a">
            <el-input v-model="form.name" autocomplete="off" />
            <span class="required">必須</span>
          </div>
        </el-form-item>
        <el-form-item prop="eMail" label="メールアドレス">
          <el-input v-model="form.eMail" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="pass" label="ログインパスワード(半角英数8文字以上)">
          <el-input v-model="form.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="checkPass" label="確認用パスワード">
          <el-input
            v-model="form.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item prop="age" label="年齢">
          <el-select v-model="form.age" placeholder=" ">
            <el-option
              v-for="age in ageList"
              :key="age"
              :label="age"
              :value="age"
            />
          </el-select>
          <!-- <el-input v-model.number="form.age" /> -->
        </el-form-item>
        <el-form-item label="性別">
          <el-radio-group v-model="form.sex">
            <el-radio label="女性" />
            <el-radio label="男性" />
            <el-radio label="その他" />
          </el-radio-group>
          <!-- <el-input v-model.number="form.age" /> -->
        </el-form-item>
        <el-form-item prop="height" label="身長">
          <el-select v-model="form.height" placeholder=" ">
            <el-option
              v-for="height in heightList"
              :key="height"
              :label="height"
              :value="height"
            />
          </el-select>
          <!-- <el-input v-model.number="form.age" /> -->
        </el-form-item>
        <!-- <div>得意種別 ※複数選択可能です！</div> -->
        <el-form-item label="得意種別 ※複数選択可能です！">
          <el-checkbox-group
            v-for="category in categories"
            :key="category"
            v-model="form.favoriteEvent"
          >
            <el-checkbox :label="category" name="favoriteEvent" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="自己紹介文！なんでもご自由に、思いのたけを">
          <el-input
            v-model="form.selfIntroduction"
            type="textarea"
            resize="none"
            :rows="4"
          />
        </el-form-item>
        <div class="confirm-button-area">
          <el-button class="confirm-button" @click="submitForm(formRef)"
            >確認</el-button
          >
          <div v-show="flag.confirmFlag" class="text">
            必須項目を入力してください
          </div>
        </div>
      </el-form>
    </div>
    <div>
      <UnLoginFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from "vue";
import type { FormInstance } from "element-plus";
import MainHeader from "../components/MainHeader.vue";
import UnLoginFooter from "../components/UnLoginFooter.vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import _ from "lodash";

const store = useStore();
const a = computed(() => store.getters["userInformation/getUserInfomation"]);
const router = useRouter();
const route = useRoute();
const formRef = ref<FormInstance>();
const emailRegExp =
  /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
const re = /^[A-Za-z0-9]*$/;
const height = 140;
const age = 18;
const heightList = [];
const ageList = [];
onMounted(() => {
  const returnFlag = route.params.flag;
  for (let i = 0; i < 61; i++) {
    heightList.push(height + i);
  }
  for (let i = 0; i < 83; i++) {
    ageList.push(age + i);
  }
});

let form = reactive({
  name: "",
  eMail: "",
  pass: "",
  checkPass: "",
  age: "",
  sex: "",
  height: "",
  favoriteEvent: [],
  selfIntroduction: "",
});

if (a.value) {
  let b = _.cloneDeep(a);
  // b.value.pass = "";
  b.value.checkPass = "";
  // form = _.cloneDeep(b.value);
  form.name = b.value.name;
  form.eMail = b.value.eMail;
  form.checkPass = b.value.checkPass;
  form.age = b.value.age;
  form.sex = b.value.sex;
  form.height = b.value.height;
  form.favoriteEvent = b.value.favoriteEvent;
  form.selfIntroduction = b.value.selfIntroduction;
} else {
  store.commit("userInformation/resetUserInfomation");
}

const flag = reactive({
  confirmFlag: false,
});

const categories = [
  "ワルツ",
  "ダンゴ",
  "スローフォックストロット",
  "クイックステップ",
  "ヴェニーズワルツ",
  "ルンバ",
  "チャチャチャ",
  "サンバ",
  "バソドブレ",
  "ジャイブ",
  "アルゼンチンダンゴ",
  "サルサ",
  "ラテンが大好き！ラテンしか勝たん！",
  "クラシック一筋ですわ。優雅にエレガントですもの！",
  "その他（自己PRんとこでアピールしてね！）",
];

const checkAge = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("年齢を入力してください"));
  } else {
    callback();
  }
};
const validateName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("名前を入力してください"));
  } else {
    callback();
  }
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("パスワードを入力してください"));
  } else {
    if (re.test(value) === false || value.length <= 8) {
      callback(new Error("半角英数8文字以上で入力してください"));
    } else {
      if (!formRef.value) return;
      formRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
// const validatePass = (rule: any, value: any, callback: any) => {
//   if (value === "") {
//     callback(new Error("パスワードを入力してください"));
//   } else {
//     if (form.checkPass !== "") {
//       if (!formRef.value) return;
//       formRef.value.validateField("checkPass", () => null);
//     }
//     callback();
//   }
// };

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("再度パスワードを入力してください"));
  } else if (value !== form.pass) {
    callback(new Error("パスワードが一致しません"));
  } else {
    callback();
  }
};
const validateEMail = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("メールアドレスを入力してください"));
  }
  setTimeout(() => {
    if (emailRegExp.test(value) === false) {
      callback(new Error("メールアドレスが正しくありません"));
    } else {
      callback();
    }
  }, 1000);
};

const rules = reactive({
  name: [{ validator: validateName, trigger: "blur" }],
  eMail: [{ validator: validateEMail, trigger: "blur" }],
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
  age: [{ validator: checkAge, trigger: "change" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      // const clone = structuredClone(form);
      store.commit("userInformation/setUserInfomation", form);
      router.push("/registratConfirm");
    } else {
      flag.confirmFlag = true;
      // router.push("/registratConfirm");
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.registration-page {
  width: 390px;
}
.main {
  height: 1180px;
  width: 306px;
  padding-left: 35px;
  .main-label {
    padding: 20px 0;
    .label {
      // padding-bottom: 12px;
      font-weight: bold;
      font-size: 18px;
      text-align: left;
    }
    .line {
      position: relative;
      width: 168px;
      border: solid 0.5px #322b2b;
    }
    .text {
      padding-top: 8px;
      font-size: 11px;
      text-align: left;
    }
  }
  .required {
    color: #ffffff;
    background: #cc0000;
    font-size: 12px;
    border-radius: 0.5em;
    height: 25px;
    width: 40px;
    display: table-cell;
    position: relative;
    vertical-align: middle;
    bottom: 33px;
    left: 50px;
  }
  .form {
    font-weight: bold;
  }
  ::v-deep {
    .el-checkbox__label {
      font-size: 12px;
      padding-right: 6px;
      position: relative;
      left: -4px;
    }
  }
  .confirm-button-area {
    padding: 20px 0 10px 0;
    ::v-deep {
      .el-button {
        width: 143px;
        background: #db2f2f;
        color: white;
        font-weight: bold;
      }
    }
    .text {
      color: red;
    }
  }
}
//必須マークを仮でつけてるだけ
.a {
  display: flex;
}
</style>
