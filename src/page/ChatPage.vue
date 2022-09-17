<template>
  <div class="user-top">
    <div><MainHeader /></div>
    <div class="main">チャット画面だよ</div>
    <div><UserFooter /></div>
  </div>
</template>

<script lang="ts" setup>
import MainHeader from "../components/MainHeader.vue";
import UserFooter from "../components/UserFooter.vue";
</script>

<style lang="scss" scoped>
.user-top {
  width: 390px;
  height: 844px;
}
.main {
  height: 697;
}
</style>
