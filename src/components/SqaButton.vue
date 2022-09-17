<template>
  <div class="sqa-button-area">
    <span class="text">{{ questionText }}</span>
    <button class="button" @click="flag = !flag">＋</button>
    <span v-show="flag" class="answer"><br />{{ answerText }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "SqaButton",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
import { defineProps, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    questionText: string;
    answerText: string;
  }>(),
  {
    questionText: "",
    answerText: "",
  }
);

const flag = ref(false);
</script>

<style lang="scss" scoped>
.sqa-button-area {
  margin: 10px 0;
  min-height: 35px;
  width: 323px;
  background-color: white;
  .text {
    position: relative;
    top: 4px;
    left: -70px;
    font-size: 12px;
    text-align: center;
  }
  .button {
    border: none;
    background: transparent;
    position: relative;
    top: 5px;
    right: -85px;
  }
}
</style>
