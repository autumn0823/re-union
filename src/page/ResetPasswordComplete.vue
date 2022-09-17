<template>
  <div class="reset-password-complete-page">
    <div>
      <MainHeader :generalPage="true" />
    </div>
    <div class="main">
      <div class="main-label">
        <div class="label">パスワード再設定画面</div>
        <div class="line"></div>
      </div>
      <div class="text-area">
        <div class="main-text">送信完了</div>
        <span class="sub-text"
          >ご登録のメールアドレスに仮パスワードを送信しました。<br />ログイン後マイページから再設定をお願いします。</span
        >
      </div>
      <div class="button-area">
        <el-button
          class="button"
          type="text"
          @click="
            $router.push('/login', () => {
              /* empty promise callback */
            })
          "
          >ログイン画面に移動する</el-button
        >
        <div class="line"></div>
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
.reset-password-complete-page {
  width: 390px;
  .main {
    height: 180px;
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
    .text-area {
      text-align: left;
      .main-text {
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 10px;
      }
      .sub-text {
        font-size: 12px;
      }
    }
    .button-area {
      padding-top: 20px;
      text-align: left;
      .button {
        font-size: 12px;
        text-decoration: underline;
      }
      // .line {
      //   position: relative;
      //   bottom: 7px;
      //   width: 130px;
      //   border: solid 0.01em #409eff;
      //   // border-width: 0.1em;
      // }
    }
  }
}
</style>
