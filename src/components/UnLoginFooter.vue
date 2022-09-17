<template>
  <div>
    <div class="footer-area">
      <div class="logo">Union</div>
      <router-link to="/memberRegistrationPage" class="button"
        >会員登録</router-link
      >
      <router-link to="/login" class="button">ログイン</router-link>
      <div class="rule">
        <span>ご利用規約 </span>
        <span>|</span>
        <span> プライバシーボリシー</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "UnLoginFooter",
};
</script>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer-area {
  color: white;
  width: 390px;
  height: 107px;
  background-color: #19181b;
  display: flex;
  flex-flow: column;
  text-align: left;
}

.logo {
  padding: 8px 0 4px 13px;
  font-size: 16px;
  font-weight: bold;
}

.button {
  padding: 4px 0 1px 13px;
  font-size: 10px;
  color: white;
  width: 70px;
  text-decoration: none;
}

.rule {
  position: relative;
  left: -26px;
  top: 9px;
  font-size: 10px;
  transform: scale(0.8);
}
</style>
