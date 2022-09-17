<template>
  <button class="member-registration-button" @click="goMemberRegistrationPage">
    無料会員登録して始める
  </button>
</template>

<script lang="ts">
export default {
  name: "AmemberRegistrationButton",
};
</script>
<script lang="ts" setup>
import { goMemberRegistrationPage } from "@/router/index";
</script>

<style lang="scss" scoped>
.member-registration-button {
  font-size: 12px;
  font-weight: bold;
  color: white;
  width: 167px;
  height: 31px;
  background: #d32727;
  border-color: red;
  border-radius: 5px;
}
</style>
