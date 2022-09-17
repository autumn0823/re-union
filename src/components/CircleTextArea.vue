<template>
  <div class="circle-text-area">
    <div class="circle"></div>
    <div class="text-area">
      <div class="text" v-html="circleTextAreaText"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CircleTextArea",
};
</script>
<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    circleTextAreaText: string;
  }>(),
  {
    circleTextAreaText: "",
  }
);
</script>

<style lang="scss" scoped>
.circle-text-area {
  position: relative;
  padding: 7px 0px;
  display: flex;
  align-items: center;
  width: 344px;
  height: 114px;
  .circle {
    position: absolute;
    width: 114px;
    height: 114px;
    border-radius: 50%;
    background: #bee0ce;
  }
  .text-area {
    width: 287px;
    height: 87px;
    background-color: #e9e9e9;
    margin-left: 57px;
  }
  .text {
    padding-left: 70px;
    width: 192px;
    height: 87px;
    font-size: 12px;
    text-align: left;
    display: table-cell;
    vertical-align: middle;
  }
}
</style>
