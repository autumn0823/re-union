<template>
  <!-- <LayoutSimpleMenu> -->
  <div>
    <div class="button-area">
      <div class="my-page-button">
        <font-awesome-icon :icon="['far', 'user-circle']" @click="goMyPage" />
      </div>
      <div class="home-button">
        <font-awesome-icon :icon="['far', 'eye']" @click="goUserTop" />
      </div>
      <div class="chat-page-button">
        <font-awesome-icon :icon="['far', 'comments']" @click="goChatPage" />
      </div>
    </div>
  </div>
  <!-- </LayoutSimpleMenu> -->
</template>

<script lang="ts">
export default {
  name: "UserFooter",
};
</script>
<script lang="ts" setup>
import { goMyPage, goUserTop, goChatPage } from "@/router/index";
import LayoutSimpleMenu from "./layout/LayoutSimpleMenu.vue";
</script>

<style lang="scss" scoped>
.button-area {
  width: 390px;
  height: 73px;
  background-color: #d9d9d9;
  display: flex;
}

.my-page-button,
.home-button,
.chat-page-button {
  font-size: 3em;
  padding: 8px 37px 0px 37px;
}
</style>
