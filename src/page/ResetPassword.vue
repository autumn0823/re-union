<template>
  <div class="reset-password-page">
    <div>
      <MainHeader :generalPage="true" />
    </div>
    <div class="main">
      <div class="main-label">
        <div class="label">パスワード再設定画面</div>
        <div class="line"></div>
      </div>
      <el-form class="form" label-position="top">
        <el-form-item label="メールアドレス">
          <el-input v-model="form.eMail" />
        </el-form-item>
      </el-form>
      <div class="send-button-area">
        <el-button
          class="login-button"
          @click="
            $router.push('/resetPasswordComplete', () => {
              /* empty promise callback */
            })
          "
          >送信</el-button
        >
        <el-button class="login-button" @click="goLoginPage">戻る</el-button>
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
import { goUserTop, goLoginPage } from "@/router/index";

const form = reactive({
  eMail: "",
  pass: "",
});
</script>

<style lang="scss" scoped>
.reset-password-page {
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
    .send-button-area {
      padding: 20px 0 10px 0;
      ::v-deep {
        .el-button {
          width: 100px;
          background: #db2f2f;
          color: white;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
