<template>
  <div class="header">
    <div v-if="generalPage" class="line">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="service-name">
      <span>Union</span>
      <span v-if="generalPage">ペアダンサーのためのマッチングサービス</span>
    </div>
    <div v-if="generalPage" class="button-area">
      <div class="register-icon-area">
        <font-awesome-icon
          :icon="['far', 'address-card']"
          @click="goMemberRegistrationPage"
          class="register-icon fa-stack-1x"
        />
        <span class="register-text">会員登録</span>
      </div>
      <div class="login-icon-area">
        <font-awesome-icon
          :icon="['far', 'circle-right']"
          @click="goLoginPage"
          class="login-icon fa-stack-1x"
        />
        <span class="login-text">ログイン</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MainHeader",
};
</script>
<script lang="ts" setup>
import { goLoginPage, goMemberRegistrationPage } from "@/router/index";
import { defineProps, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    generalPage: boolean;
  }>(),
  {
    generalPage: false,
  }
);
</script>

<style lang="scss" scoped>
.header {
  width: 390px;
  height: 40px;
  background-color: #bee0ce;
  display: flex;
  align-items: center;
}

.line {
  position: relative;
  height: 20px;
  width: 28px;
  display: inline-block;
  box-sizing: border-box;
  margin-left: 9px;
}
.line div {
  position: absolute;
  left: 0;
  height: 2px;
  width: 28px;
  background-color: #444;
  border-radius: 2px;
  display: inline-block;
  box-sizing: border-box;
}
.line div:nth-of-type(1) {
  top: 0px;
  bottom: 20px;
}
.line div:nth-of-type(2) {
  top: 9px;
  width: 24px;
  bottom: 10px;
}
.line div:nth-of-type(3) {
  width: 20px;
  bottom: 0;
}

.service-name {
  padding-left: 6px;
}
.service-name span:nth-of-type(1) {
  font-size: 18px;
}
.service-name span:nth-of-type(2) {
  padding-left: 3px;
  font-size: 10px;
}

.button-area {
  display: flex;
}
.register-icon-area {
  position: relative;
  // text-align: right;
  right: -32px;
  // margin-left: auto;
}
.login-icon-area {
  position: relative;
  // text-align: right;
  right: -28px;
  // margin-left: auto;
}

.register-icon,
.login-icon {
  top: -6px;
  font-size: 1.5em;
}

.register-text,
.login-text {
  position: relative;
  display: block;
  top: 13px;
  font-size: 10px;
  transform: scale(0.7);
}
</style>
