<template>
  <div class="login-page">
    <div>
      <MainHeader :generalPage="true" />
    </div>
    <div class="main">
      <div class="main-label">
        <div class="label">ログイン画面</div>
        <div class="line"></div>
      </div>
      <el-form class="form" label-position="top">
        <el-form-item label="メールアドレス">
          <el-input v-model="form.eMail" />
        </el-form-item>
        <el-form-item label="パスワード">
          <el-input v-model="form.pass" />
        </el-form-item>
      </el-form>
      <div class="login-button-area">
        <el-button class="login-button" @click="goUserTop">ログイン</el-button>
      </div>
      <div class="guidance-area">
        <span class="forget-text">パスワードを忘れた場合は</span>
        <button
          class="register-button"
          @click="
            $router.push('/resetPassword', () => {
              /* empty promise callback */
            })
          "
        >
          こちら
        </button>
      </div>
    </div>
    <div>
      <UnLoginFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import MainHeader from "../components/MainHeader.vue";
import UnLoginFooter from "../components/UnLoginFooter.vue";
import { useRouter } from "vue-router";
import { goUserTop } from "@/router/index";

const form = reactive({
  eMail: "",
  pass: "",
});

const goToTop = () => {
  const router = useRouter();
  router.push("/userTop");
};
</script>

<style lang="scss" scoped>
.login-page {
  width: 390px;

  .main {
    height: 300px;
    padding: 30px;
    .main-label {
      padding-bottom: 30px;
      .label {
        font-weight: bold;
        font-size: 18px;
        text-align: left;
      }
      .line {
        position: relative;
        width: 168px;
        border: solid 0.5px #322b2b;
      }
    }
    .form {
      font-weight: bold;
    }
    .login-button-area {
      padding: 20px 0 10px 0;
      ::v-deep {
        .el-button {
          width: 143px;
          background: #db2f2f;
          color: white;
          font-weight: bold;
        }
      }
    }
    .guidance-area {
      position: relative;
      font-size: 10px;
      transform: scale(0.8);
      .forget-text {
        position: relative;
        left: 2.5px;
      }
      .register-button {
        position: relative;
        left: -2.5px;
        top: -0.5px;
        font-size: 10px;
        border: none;
        background: transparent;
        color: blue;
      }
    }
  }
}
</style>
