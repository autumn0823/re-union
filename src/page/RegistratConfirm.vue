<template>
  <div class="registrat-confirm-page">
    <div>
      <MainHeader :generalPage="true" />
    </div>
    <div class="main">
      <div class="main-label">
        <div class="label">入力内容確認画面</div>
        <div class="line"></div>
      </div>
      <div class="confirm-area">
        <div class="item">
          <div class="label">名前：</div>
          <div class="value">{{ a.name }}</div>
        </div>
        <div class="item">
          <div class="label">メールアドレス：</div>
          <div class="value">{{ a.eMail }}</div>
        </div>
        <!-- <div class="password"></div> -->
        <div class="item">
          <div class="label">年齢：</div>
          <div class="value">{{ a.age }}</div>
        </div>
        <div class="item">
          <div class="label">性別：</div>
          <div class="value">{{ a.sex }}</div>
        </div>
        <div class="item">
          <div class="label">身長：</div>
          <div class="value">{{ a.height }}</div>
        </div>
        <div class="item">
          <div class="label">得意種別：</div>
          <div class="value">{{ a.favoriteEvent }}</div>
        </div>
        <div class="item">
          <div class="label">自己紹介文：</div>
          <div class="value">{{ a.selfIntroduction }}</div>
        </div>
      </div>
      <div class="button-area">
        <el-button class="confirm-button" @click="goCompletRegistratPage"
          >確定</el-button
        >
        <!-- <el-button class="back-button" @click="goMemberRegistrationPage"
          >戻る</el-button
        > -->
        <router-link
          :to="{
            name: 'MemberRegistrationPagepPage',
            params: { flag: true },
          }"
          >戻る</router-link
        >
      </div>
    </div>
    <div>
      <UnLoginFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import MainHeader from "../components/MainHeader.vue";
import UnLoginFooter from "../components/UnLoginFooter.vue";
// import { useRouter } from "vue-router";
import {
  goCompletRegistratPage,
  goMemberRegistrationPage,
} from "@/router/index";
import { useStore } from "vuex";

const store = useStore();
const a = computed(() => store.getters["userInformation/getUserInfomation"]);
</script>

<style lang="scss" scoped>
.registrat-confirm-page {
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
    .confirm-area {
      width: 280px;
      .item {
        display: flex;
        .label {
          width: 135px;
          text-align: left;
          padding-left: 10px;
        }
        .value {
          padding-left: 10px;
        }
      }
    }
    .button-area {
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
  }
}
</style>
