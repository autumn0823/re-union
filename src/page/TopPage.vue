<template>
  <div class="top-page">
    <div><MainHeader :generalPage="true" /></div>
    <div class="a">
      <div class="a-area">
        <div class="text1">全てのペアダンサーのために</div>
        <div class="text2">
          ダンサー限定の<br />無料マッチングサービス<br />Union
        </div>
        <AmemberRegistrationButton />
      </div>
    </div>
    <div class="b">
      <div class="text3">Unionについて</div>
      <div class="line"></div>
      <div class="text4">
        Unionは、ペアダンサーのパートナー探しをお手伝いするサービスです。<br />
        トップを目指したい方たちから、これからダンスを始めたい方まで、幅広くご利用いただき、ダンス業界を、もっとわくわくするような場所にしていきたい思いで立ち上げました。
      </div>
      <CircleTextArea :circleTextAreaText="circleTextAreaText1" />
      <CircleTextArea :circleTextAreaText="circleTextAreaText2" />
    </div>
    <div class="c">
      <div class="text6">ご利用の流れ</div>
      <div class="line"></div>
      <div class="c-step">
        <div class="step-icon-area">
          <div>
            <font-awesome-icon :icon="['fas', 'shoe-prints']" />
            <span class="step-text">ステップ1</span>
          </div>
          <font-awesome-icon :icon="['far', 'user-circle']" class="step-icon" />
        </div>
        <div class="step-icon-area">
          <div>
            <font-awesome-icon
              :icon="['fas', 'shoe-prints']"
              class="foot-icon"
            />
            <span class="step-text">ステップ2</span>
          </div>
          <font-awesome-icon :icon="['far', 'eye']" class="step-icon" />
        </div>
        <div class="step-icon-area">
          <div>
            <font-awesome-icon
              :icon="['fas', 'shoe-prints']"
              class="foot-icon"
            />
            <span class="step-text">ステップ3</span>
          </div>
          <font-awesome-icon :icon="['far', 'comments']" class="step-icon" />
        </div>
      </div>
      <AmemberRegistrationButton />
    </div>
    <div class="d">
      <div class="text7">よくある質問</div>
      <div class="line"></div>
      <div class="sqa-area">
        <SqaButton :questionText="questionText1" :answerText="answerText1" />
        <SqaButton :questionText="questionText2" :answerText="answerText2" />
        <SqaButton :questionText="questionText3" :answerText="answerText3" />
      </div>
    </div>
    <div><UnLoginFooter /></div>
  </div>
</template>

<script lang="ts" setup>
import MainHeader from "../components/MainHeader.vue";
import AmemberRegistrationButton from "../components/MemberRegistrationButton.vue";
import UnLoginFooter from "../components/UnLoginFooter.vue";
import SqaButton from "../components/SqaButton.vue";
import CircleTextArea from "../components/CircleTextArea.vue";

const circleTextAreaText1 =
  "登録・チャット機能利用含め<br />すべての料金が無料です";
const circleTextAreaText2 =
  "ダンスのパートナーやダンス仲間を<br />探している方向けのサービスです。<br />そのため、彼女をお探しの方は、<br />別サービスをご利用ください。";
const questionText1 = "Q あああああああああ";
const questionText2 = "Q いいいいいいいいい";
const questionText3 = "Q ううううううううう";
const answerText1 = "答え";
const answerText2 = "アンサー";
const answerText3 = "回答";
</script>

<style lang="scss" scoped>
.top-page {
  background-color: #cacaca;
  width: 390px;
}
.a {
  text-align: left;
  background-color: grey;
  height: 281px;
  .a-area {
    position: relative;
    top: 60px;
    left: 30px;
    .text1 {
      color: white;
      font-weight: bold;
      font-size: 12px;
    }
    .text2 {
      color: white;
      font-weight: bold;
      font-size: 24px;
    }
  }
}
.b {
  padding: 15px 18px;
  height: 400px;
  .text3 {
    padding-bottom: 12px;
    font-weight: bold;
    font-size: 18px;
    text-align: left;
  }
  .line {
    top: -13px;
  }
  .text4 {
    font-size: 12px;
    padding-bottom: 7px;
    text-align: left;
  }
}
.c {
  padding: 15px 18px;
  height: 196px;
  .text6 {
    font-weight: bold;
    font-size: 18px;
    text-align: left;
  }
  .c-step {
    display: flex;
  }
  .step-icon-area {
    padding: 15px 21.5px 35px 0;
    .step-text {
      font-weight: bold;
      margin-left: 3px;
    }
    .step-icon {
      padding-top: 5px;
      font-size: 3em;
    }
  }
}
.d {
  padding: 15px 18px;
  height: 200px;
  .text7 {
    text-align: left;
    font-weight: bold;
    font-size: 18px;
  }
  .sqa-area {
    padding: 15px 0 0 10px;
  }
}
.line {
  position: relative;
  width: 168px;
  border: solid 0.5px #322b2b;
}
</style>
